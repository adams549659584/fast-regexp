declare module '*.vue' {
  /**
   * vue 扩展
   */
  module 'vue/types/vue' {
    interface Vue {
      /**
       * 跟踪事件
       * @param n 事件标识
       * @param t 事件字段
       */
      $sendEvent: (n: string) => void;
    }
  }
  import Vue from 'vue';
  export default Vue;
}
