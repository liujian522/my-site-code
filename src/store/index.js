import Vuex from 'vuex';
import Vue from 'vue';
import global from './global';
import banner from './banner';
import about from './about';
import demo from './demo';
import person from './person';

if (!window.Vuex) {
    Vue.use(Vuex); //使用插件
}

const store = new Vuex.Store({
    strict: true, //严格模式
    modules: {
        global,
        banner,
        about,
        demo,
        person,
    },
});
export default store;