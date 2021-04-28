<template>
  <div id="app">
    <div class="reg-stars">
      <a href="https://github.com/adams549659584/fast-regexp" target="_blank">
        <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/adams549659584/fast-regexp?style=social" />
      </a>
    </div>
    <div class="reg-container">
      <div class="reg-left">
        <div class="reg-check">
          <el-input
            class="reg-waitfor-check"
            type="textarea"
            spellcheck="false"
            :rows="4"
            placeholder="在此输入待匹配文本"
            v-model="regWaitforCheckVal"
            clearable
            @input="regWaitforCheckValChange"
            @blur="regWaitforCheckValSelect"
          ></el-input>
        </div>
        <div class="reg-result">
          <el-input type="textarea" spellcheck="false" disabled :rows="4" placeholder="匹配结果..." v-model="regCheckedResult" clearable></el-input>
        </div>
        <div class="reg-val">
          <el-input class="reg-input" placeholder="请选择或输入正则表达式" v-model="inputRegVal" clearable @focus="inputRegValSelect" @blur="inputRegValSelect" @input="inputRegValChange">
            <template slot="prepend">/</template>
            <template slot="append">/{{ checkedRegModifiers.join('') }}</template>
          </el-input>
          <el-popover placement="bottom" trigger="hover">
            <el-button slot="reference">
              修饰符
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-checkbox-group class="reg-modifier" v-model="checkedRegModifiers" @change="handleCheckedRegModifiersChange">
              <el-checkbox v-for="(item, index) in regModifierOptions" :key="index" :checked="item.checked" :label="item.value">{{ item.label }}</el-checkbox>
            </el-checkbox-group>
          </el-popover>
        </div>
        <div class="reg-auto">
          <el-input class="reg-input" placeholder="请选择智能生成精确度（正整数）" v-model="precisionRate" clearable>
            <template slot="prepend">精确度：</template>
            <template slot="append">
              <el-tooltip class="reg-tips" effect="dark" content="测试功能，精确度越高越精确" placement="top">
                <el-button type="primary" @click="autoBuildRegexp">选中文本智能生成</el-button>
              </el-tooltip>
              <!-- <el-button type="primary" @click="autoBuildRegexp">选中文本智能生成</el-button> -->
            </template>
          </el-input>
          <!-- <el-button type="primary" @click="autoBuildRegexp">选中文本智能生成</el-button>
          <el-input-number v-model="precisionRate" :min="1" label="精确度"></el-input-number>-->
        </div>
      </div>
      <div class="reg-right">
        <div class="reg-tags">
          <el-tooltip v-for="(item, index) in regexList" :key="index" class="reg-tips" effect="dark" :content="item.reg" placement="top">
            <el-button class="reg-btn" :type="item.type" @click="addRegVal(item)">{{ item.tip }}</el-button>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button, Input, Tooltip, Popover, CheckboxGroup, Checkbox, Message } from 'element-ui';

@Component({
  components: {
    [Button.name]: Button,
    [Input.name]: Input,
    [Tooltip.name]: Tooltip,
    [Popover.name]: Popover,
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
  },
})
export default class App extends Vue {
  regWaitforCheckVal = '';
  regCheckedResult = '';
  inputRegVal = '';
  lastWaitforCheckValSelectionStart = 0;
  lastWaitforCheckValSelectionEnd = 0;
  lastRegexpSelectionStart = 0;
  lastRegexpSelectionEnd = 0;
  regexList = [
    {
      type: 'primary',
      reg: '.',
      tip: '匹配除换行符以外的任意字符',
    },
    {
      type: 'primary',
      reg: '\\w',
      tip: '匹配字母或数字或下划线',
    },
    {
      type: 'primary',
      reg: '\\s',
      tip: '匹配任意的空白符',
    },
    {
      type: 'primary',
      reg: '\\d',
      tip: '匹配数字',
    },
    {
      type: 'primary',
      reg: '\\b',
      tip: '匹配单词的开始或结束',
    },
    {
      type: 'primary',
      reg: '^',
      tip: '匹配字符串的开始',
    },
    {
      type: 'primary',
      reg: '$',
      tip: '匹配字符串的结束',
    },
    {
      type: 'primary',
      reg: '\\W',
      tip: '匹配任意不是字母，数字，下划线，汉字的字符',
    },
    {
      type: 'primary',
      reg: '\\S',
      tip: '匹配任意不是空白符的字符',
    },
    {
      type: 'primary',
      reg: '\\D',
      tip: '匹配任意非数字的字符',
    },
    {
      type: 'primary',
      reg: '\\B',
      tip: '匹配不是单词开头或结束的位置',
    },
    {
      type: 'primary',
      reg: '[^x]',
      tip: '匹配除了x以外的任意字符',
    },
    {
      type: 'primary',
      reg: '[^abc]',
      tip: '匹配除了abc这几个字母以外的任意字符',
    },
    {
      type: 'primary',
      reg: '[abc]',
      tip: '匹配abc这几个字符中任意字符',
    },
    {
      type: 'primary',
      reg: '[a-z]',
      tip: '匹配指定范围内的任意字符',
    },
    {
      type: 'primary',
      reg: '[!a-z]',
      tip: '匹配任何不在指定范围内的任意字符',
    },
    {
      type: 'primary',
      reg: '[\\s\\S]',
      tip: '匹配任意字符',
    },
    {
      type: 'primary',
      reg: '[\\u4e00-\\u9fa5]',
      tip: '匹配中文',
    },
    {
      type: 'success',
      reg: '*',
      tip: '重复零次或更多次',
    },
    {
      type: 'success',
      reg: '+',
      tip: '重复一次或更多次',
    },
    {
      type: 'success',
      reg: '?',
      tip: '重复零次或一次',
    },
    {
      type: 'success',
      reg: '{n}',
      tip: '重复n次',
    },
    {
      type: 'success',
      reg: '{n,}',
      tip: '重复n次或更多次',
    },
    {
      type: 'success',
      reg: 'A.*?B',
      tip: '重复n到m次',
    },
    {
      type: 'danger',
      reg: 'A.*?B',
      tip: '匹配A与B中间的字符串包含A与B',
    },
    {
      type: 'danger',
      reg: 'A.*?(?=B)',
      tip: '匹配A与B中间的字符串包含A但是不包含B',
    },
    {
      type: 'danger',
      reg: '(?<=A).*?(?=B)',
      tip: '匹配A与B中间的字符串且不包含A与B',
    },
  ];
  checkedRegModifiers = [];
  regModifierOptions = [
    {
      checked: false,
      value: 'g',
      label: '全局搜索 - g',
    },
    {
      checked: false,
      value: 'i',
      label: '忽略大小写 - i',
    },
    {
      checked: false,
      value: 'm',
      label: '多行模式 - m',
    },
  ];
  precisionRate = 5;
  needEscapeChats = ['*', '.', '?', '+', '$', '^', '[', ']', '(', ')', '{', '}', '|', '\\', '/'];

  regWaitforCheckValChange(event: InputEvent) {
    const that = this;
    that.renderRegResult();
  }

  regWaitforCheckValSelect(event: Event) {
    const that = this;
    const { selectionStart, selectionEnd, value } = event.target as any;
    that.lastWaitforCheckValSelectionStart = selectionStart;
    that.lastWaitforCheckValSelectionEnd = selectionEnd;
  }

  inputRegValSelect(event: Event) {
    const that = this;
    const { selectionStart, selectionEnd, value } = event.target as any;
    that.lastRegexpSelectionStart = selectionStart;
    that.lastRegexpSelectionEnd = selectionEnd;
  }

  inputRegValChange(event: Event) {
    const that = this;
    that.renderRegResult();
  }

  addRegVal(item: { reg: string }) {
    const that = this;
    that.inputRegVal = that.inputRegVal.substr(0, that.lastRegexpSelectionStart) + item.reg + that.inputRegVal.substr(that.lastRegexpSelectionEnd, that.inputRegVal.length);
    that.lastRegexpSelectionStart = that.lastRegexpSelectionStart + item.reg.length;
    that.lastRegexpSelectionEnd = that.lastRegexpSelectionStart;
    that.renderRegResult();
  }
  handleCheckedRegModifiersChange() {
    const that = this;
    that.renderRegResult();
  }

  renderRegResult() {
    const that = this;
    if (!that.regWaitforCheckVal || !that.inputRegVal) {
      that.regCheckedResult = '';
      return;
    }
    try {
      const regexpFlags = that.checkedRegModifiers.join('');
      const regexp = new RegExp(that.inputRegVal, regexpFlags);
      const results = that.regWaitforCheckVal.match(regexp);
      if (!results || results.length === 0) {
        that.regCheckedResult = '没有匹配';
      } else {
        const isCheckedGlobal = regexpFlags.includes('g');
        if (isCheckedGlobal) {
          const resultStr = results.join('\r\n');
          that.regCheckedResult = `共找到${results.length}处匹配：\r\n${resultStr}`;
        } else {
          const resultStr = results.toString();
          that.regCheckedResult = `匹配位置：${results.index}\r\n匹配结果：${resultStr}`;
          that.setWaitforCheckValSelected(results.index, results.index + resultStr.length);
        }
      }
    } catch (error) {
      console.log(`error : `, error);
      that.regCheckedResult = '没有匹配';
    }
  }

  autoBuildRegexp() {
    const that = this;
    if (that.lastWaitforCheckValSelectionStart === that.lastWaitforCheckValSelectionEnd) {
      return Message.error('请先选中待匹配文本中需匹配的内容');
    }
    let regexp = '';
    if (that.lastWaitforCheckValSelectionStart >= that.precisionRate) {
      regexp += `(?<=${that.escapeToRegexp(that.regWaitforCheckVal.substr(that.lastWaitforCheckValSelectionStart - that.precisionRate, that.precisionRate))})`;
    } else if (that.lastWaitforCheckValSelectionStart > 0) {
      regexp += `(?<=${that.escapeToRegexp(that.regWaitforCheckVal.substring(0, that.lastWaitforCheckValSelectionStart))})`;
    } else {
      regexp += '^';
    }
    regexp += `.*?`;
    if (that.lastWaitforCheckValSelectionEnd <= that.regWaitforCheckVal.length - that.precisionRate) {
      regexp += `(?=${that.escapeToRegexp(that.regWaitforCheckVal.substr(that.lastWaitforCheckValSelectionEnd, that.precisionRate))})`;
    } else if (that.lastWaitforCheckValSelectionEnd === that.regWaitforCheckVal.length) {
      regexp += `$`;
    } else {
      regexp += `(?=${that.escapeToRegexp(that.regWaitforCheckVal.substring(that.lastWaitforCheckValSelectionEnd, that.regWaitforCheckVal.length))})`;
    }
    that.inputRegVal = regexp;
    that.renderRegResult();
    // 选中原始内容
    that.setWaitforCheckValSelected(that.lastWaitforCheckValSelectionStart, that.lastWaitforCheckValSelectionEnd);
  }

  escapeToRegexp(str: string) {
    const that = this;
    if (str && str.length > 0) {
      const strChats = [...str];
      for (let i = 0; i < strChats.length; i++) {
        const strChat = strChats[i];
        if (that.needEscapeChats.includes(strChat)) {
          strChats[i] = `\\${strChat}`;
        }
      }
      const escapeStr = strChats.join('');
      return escapeStr;
    }
    return str;
  }

  setWaitforCheckValSelected(startIndex, endIndex) {
    const el = document.querySelector('.reg-check .reg-waitfor-check .el-textarea__inner') as HTMLInputElement;
    if (el) {
      if (el.setSelectionRange) {
        el.setSelectionRange(startIndex, endIndex);
      }
      el.focus();
    }
  }
}
</script>

<style lang="less" scoped>
.reg-stars {
  position: absolute;
  top: 10px;
  right: 10px;
}
.reg-container {
  width: 100%;
  margin: 5vh auto;
  display: flex;
  justify-content: center;
  // align-items: flex-start;
  .reg-left {
    margin: 10px 0 0 0;
    .reg-check {
      width: 703px;
    }
    .reg-result {
      margin: 20px 0 0 0;
      width: 703px;
    }
    .reg-val {
      margin: 20px 0 0 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .reg-input {
        width: 600px;
      }
    }
    .reg-auto {
      margin: 20px 0 0 0;
    }
  }
  .reg-right {
    margin: 0 0 0 20px;
    .reg-tags {
      max-width: 703px;
      .reg-btn {
        margin: 10px 10px 0 0;
      }
    }
  }
}
.reg-modifier.el-checkbox-group {
  width: 175px;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
<style lang="less">
body {
  background-color: #f4f5f5;
}
.reg-result {
  .el-textarea.is-disabled .el-textarea__inner {
    color: #409eff;
  }
}
</style>
