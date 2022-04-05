// 人口文件
// 自动导入
import { showMessage } from '@/utils'; //显示弹窗
window.showMessage = showMessage;
import "./eventBus"
import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import store from './store'
store.dispatch('person/feachWhoAmI'); //查看是否登录
import loadingObj from '@/directive/loadingObj' //导入了一个函数
import lazy from '@/directive/lazy'
import '@/styles/global.less'
Vue.directive('loading', loadingObj); //将此函数全局注册指令
Vue.directive('lazy', lazy);
store.dispatch('global/getGlobalSet')
new Vue({
    router, //挂载实列
    store,
    render: h => h(App),
}).$mount('#app')