import Vue from 'vue'; //事件总线
const app = new Vue({})
Vue.prototype.$Bus = app;
export default app;