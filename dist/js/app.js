(function(e){function t(t){for(var r,c,l=t[0],o=t[1],s=t[2],u=0,g=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&g.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);p&&p(t);while(g.length)g.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},i=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["jsonpFunction"]=window["jsonpFunction"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},5698:function(e,t,a){},"864f":function(e,t,a){"use strict";var r=a("b290"),n=a.n(r);n.a},"94fb":function(e,t,a){"use strict";var r=a("5698"),n=a.n(r);n.a},b290:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r,n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"reg-container"},[a("div",{staticClass:"reg-left"},[a("div",{staticClass:"reg-check"},[a("el-input",{staticClass:"reg-waitfor-check",attrs:{type:"textarea",spellcheck:"false",rows:4,placeholder:"在此输入待匹配文本",clearable:""},on:{input:e.regWaitforCheckValChange,blur:e.regWaitforCheckValSelect},model:{value:e.regWaitforCheckVal,callback:function(t){e.regWaitforCheckVal=t},expression:"regWaitforCheckVal"}})],1),a("div",{staticClass:"reg-result"},[a("el-input",{attrs:{type:"textarea",spellcheck:"false",disabled:"",rows:4,placeholder:"匹配结果...",clearable:""},model:{value:e.regCheckedResult,callback:function(t){e.regCheckedResult=t},expression:"regCheckedResult"}})],1),a("div",{staticClass:"reg-val"},[a("el-input",{staticClass:"reg-input",attrs:{placeholder:"请选择或输入正则表达式",clearable:""},on:{focus:e.inputRegValSelect,blur:e.inputRegValSelect,input:e.inputRegValChange},model:{value:e.inputRegVal,callback:function(t){e.inputRegVal=t},expression:"inputRegVal"}},[a("template",{slot:"prepend"},[e._v("/")]),a("template",{slot:"append"},[e._v("/"+e._s(e.checkedRegModifiers.join("")))])],2),a("el-popover",{attrs:{placement:"bottom",trigger:"hover"}},[a("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("修饰符"),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),a("el-checkbox-group",{staticClass:"reg-modifier",on:{change:e.handleCheckedRegModifiersChange},model:{value:e.checkedRegModifiers,callback:function(t){e.checkedRegModifiers=t},expression:"checkedRegModifiers"}},e._l(e.regModifierOptions,(function(t,r){return a("el-checkbox",{key:r,attrs:{checked:t.checked,label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1),a("div",{staticClass:"reg-auto"},[a("el-input",{staticClass:"reg-input",attrs:{placeholder:"请选择智能生成精确度（正整数）",clearable:""},model:{value:e.precisionRate,callback:function(t){e.precisionRate=t},expression:"precisionRate"}},[a("template",{slot:"prepend"},[e._v("精确度：")]),a("template",{slot:"append"},[a("el-tooltip",{staticClass:"reg-tips",attrs:{effect:"dark",content:"测试功能，精确度越高越精确",placement:"top"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.autoBuildRegexp}},[e._v("选中文本智能生成")])],1)],1)],2)],1)]),a("div",{staticClass:"reg-right"},[a("div",{staticClass:"reg-tags"},e._l(e.regexList,(function(t,r){return a("el-tooltip",{key:r,staticClass:"reg-tips",attrs:{effect:"dark",content:t.reg,placement:"top"}},[a("el-button",{staticClass:"reg-btn",attrs:{type:t.type},on:{click:function(a){return e.addRegVal(t)}}},[e._v(e._s(t.tip))])],1)})),1)])])])},c=[],l=(a("2397"),a("bd86")),o=(a("560b"),a("450d"),a("dcdc")),s=a.n(o),p=(a("d4df"),a("7fc1")),u=a.n(p),g=(a("06f1"),a("6ac9")),f=a.n(g),d=(a("0c67"),a("299c")),h=a.n(d),y=(a("10cb"),a("f3ad")),b=a.n(y),k=(a("7f7f"),a("1951"),a("eedf")),v=a.n(k),R=(a("0fb7"),a("f529")),C=a.n(R),S=(a("6b54"),a("6762"),a("2fdb"),a("4917"),a("3b2b"),a("d225")),m=a("b0b4"),V=a("4e2b"),x=a("308d"),W=a("6bb5"),j=a("9ab4"),O=a("60a3");function _(e){return function(){var t,a=Object(W["a"])(e);if(E()){var r=Object(W["a"])(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(x["a"])(this,t)}}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var w=function(e){Object(V["a"])(a,e);var t=_(a);function a(){var e;return Object(S["a"])(this,a),e=t.apply(this,arguments),e.regWaitforCheckVal="",e.regCheckedResult="",e.inputRegVal="",e.lastWaitforCheckValSelectionStart=0,e.lastWaitforCheckValSelectionEnd=0,e.lastRegexpSelectionStart=0,e.lastRegexpSelectionEnd=0,e.regexList=[{type:"primary",reg:".",tip:"匹配除换行符以外的任意字符"},{type:"primary",reg:"\\w",tip:"匹配字母或数字或下划线"},{type:"primary",reg:"\\s",tip:"匹配任意的空白符"},{type:"primary",reg:"\\d",tip:"匹配数字"},{type:"primary",reg:"\\b",tip:"匹配单词的开始或结束"},{type:"primary",reg:"^",tip:"匹配字符串的开始"},{type:"primary",reg:"$",tip:"匹配字符串的结束"},{type:"primary",reg:"\\W",tip:"匹配任意不是字母，数字，下划线，汉字的字符"},{type:"primary",reg:"\\S",tip:"匹配任意不是空白符的字符"},{type:"primary",reg:"\\D",tip:"匹配任意非数字的字符"},{type:"primary",reg:"\\B",tip:"匹配不是单词开头或结束的位置"},{type:"primary",reg:"[^x]",tip:"匹配除了x以外的任意字符"},{type:"primary",reg:"[^abc]",tip:"匹配除了abc这几个字母以外的任意字符"},{type:"primary",reg:"[abc]",tip:"匹配abc这几个字符中任意字符"},{type:"primary",reg:"[a-z]",tip:"匹配指定范围内的任意字符"},{type:"primary",reg:"[!a-z]",tip:"匹配任何不在指定范围内的任意字符"},{type:"primary",reg:"[\\s\\S]",tip:"匹配任意字符"},{type:"primary",reg:"[\\u4e00-\\u9fa5]",tip:"匹配中文"},{type:"success",reg:"*",tip:"重复零次或更多次"},{type:"success",reg:"+",tip:"重复一次或更多次"},{type:"success",reg:"?",tip:"重复零次或一次"},{type:"success",reg:"{n}",tip:"重复n次"},{type:"success",reg:"{n,}",tip:"重复n次或更多次"},{type:"success",reg:"A.*?B",tip:"重复n到m次"},{type:"danger",reg:"A.*?B",tip:"匹配A与B中间的字符串包含A与B"},{type:"danger",reg:"A.*?(?=B)",tip:"匹配A与B中间的字符串包含A但是不包含B"},{type:"danger",reg:"(?<=A).*?(?=B)",tip:"匹配A与B中间的字符串且不包含A与B"}],e.checkedRegModifiers=[],e.regModifierOptions=[{checked:!1,value:"g",label:"全局搜索 - g"},{checked:!1,value:"i",label:"忽略大小写 - i"},{checked:!1,value:"m",label:"多行模式 - m"}],e.precisionRate=5,e}return Object(m["a"])(a,[{key:"regWaitforCheckValChange",value:function(e){var t=this;t.renderRegResult()}},{key:"regWaitforCheckValSelect",value:function(e){var t=this,a=e.target,r=a.selectionStart,n=a.selectionEnd;a.value;t.lastWaitforCheckValSelectionStart=r,t.lastWaitforCheckValSelectionEnd=n}},{key:"inputRegValSelect",value:function(e){var t=this,a=e.target,r=a.selectionStart,n=a.selectionEnd;a.value;t.lastRegexpSelectionStart=r,t.lastRegexpSelectionEnd=n}},{key:"inputRegValChange",value:function(e){var t=this;t.renderRegResult()}},{key:"addRegVal",value:function(e){var t=this;t.inputRegVal=t.inputRegVal.substr(0,t.lastRegexpSelectionStart)+e.reg+t.inputRegVal.substr(t.lastRegexpSelectionEnd,t.inputRegVal.length),t.lastRegexpSelectionStart=t.lastRegexpSelectionStart+e.reg.length,t.lastRegexpSelectionEnd=t.lastRegexpSelectionStart,t.renderRegResult()}},{key:"handleCheckedRegModifiersChange",value:function(){var e=this;e.renderRegResult()}},{key:"renderRegResult",value:function(){var e=this;if(e.regWaitforCheckVal&&e.inputRegVal)try{var t=e.checkedRegModifiers.join(""),a=new RegExp(e.inputRegVal,t),r=e.regWaitforCheckVal.match(a);if(r&&0!==r.length){var n=t.includes("g");if(n){var i=r.join("\r\n");e.regCheckedResult="共找到".concat(r.length,"处匹配：\r\n").concat(i)}else{var c=r.toString();e.regCheckedResult="匹配位置：".concat(r.index,"\r\n匹配结果：").concat(c),e.setWaitforCheckValSelected(r.index,r.index+c.length)}}else e.regCheckedResult="没有匹配"}catch(l){console.log("error : ",l),e.regCheckedResult="没有匹配"}else e.regCheckedResult=""}},{key:"autoBuildRegexp",value:function(){var e=this;if(e.lastWaitforCheckValSelectionStart===e.lastWaitforCheckValSelectionEnd)return C.a.error("请先选中待匹配文本中需匹配的内容");var t="";e.lastWaitforCheckValSelectionStart>=e.precisionRate?t+="(?<=".concat(e.regWaitforCheckVal.substr(e.lastWaitforCheckValSelectionStart-e.precisionRate,e.precisionRate),")"):e.lastWaitforCheckValSelectionStart>0?t+="(?<=".concat(e.regWaitforCheckVal.substring(0,e.lastWaitforCheckValSelectionStart),")"):t+="^",t+=".*?",e.lastWaitforCheckValSelectionEnd<=e.regWaitforCheckVal.length-e.precisionRate?t+="(?=".concat(e.regWaitforCheckVal.substr(e.lastWaitforCheckValSelectionEnd,e.precisionRate),")"):e.lastWaitforCheckValSelectionEnd===e.regWaitforCheckVal.length?t+="$":t+="(?=".concat(e.regWaitforCheckVal.substring(e.lastWaitforCheckValSelectionEnd,e.regWaitforCheckVal.length),")"),e.inputRegVal=t,e.renderRegResult(),e.setWaitforCheckValSelected(e.lastWaitforCheckValSelectionStart,e.lastWaitforCheckValSelectionEnd)}},{key:"setWaitforCheckValSelected",value:function(e,t){var a=document.querySelector(".reg-check .reg-waitfor-check .el-textarea__inner");a&&(a.setSelectionRange&&a.setSelectionRange(e,t),a.focus())}}]),a}(O["b"]);w=Object(j["a"])([Object(O["a"])({components:(r={},Object(l["a"])(r,v.a.name,v.a),Object(l["a"])(r,b.a.name,b.a),Object(l["a"])(r,h.a.name,h.a),Object(l["a"])(r,f.a.name,f.a),Object(l["a"])(r,u.a.name,u.a),Object(l["a"])(r,s.a.name,s.a),r)})],w);var M=w,B=M,A=(a("864f"),a("94fb"),a("2877")),P=Object(A["a"])(B,i,c,!1,null,"24783898",null),$=P.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e($)}}).$mount("#app")}});
//# sourceMappingURL=app.js.map?h=f18143b4