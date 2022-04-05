import Vue from 'vue';
import VueRouter from 'vue-router'; //载入插件
import { setTitles } from '@/utils'
import routes from '@/router/routes.js';
import store from '../store/index';
if (!window.VueRouter) {
    Vue.use(VueRouter); //使用插件
}
// console.log(process.env.BASE_URL);
const router = new VueRouter({
    //配置对象
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
});
router.beforeEach((to, from, next) => { //每当导航切换时，第一次也会触发
    // console.log(to)
    if (to.meta.auth) { //需要鉴权 
        const status = store.getters['person/status'];
        if (status === '登录') {
            next({ name: 'Login', query: { targetUrl: to.fullPath } })
        } else if (status === '已登录') {
            next()
        } else {
            next({ name: 'Loading', query: { targetUrl: to.fullPath } })
        }
    } else {
        next();
    }
});
router.afterEach((to) => {
    if (to.meta.title) {
        const title = to.meta.title;
        setTitles.setRouterTitle(title)
    }
});
export default router;