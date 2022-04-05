import { login, loginOut, whoAmI } from '@/api/login.js';
export default {
    namespaced: true, //命名空间模块化
    state: {
        isLoading: false,
        user: null,
    },
    mutations: { //数据突变，通过函数改变store的数据
        setIsLoading(state, payload) {
            state.isLoading = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        }
    },
    getters: {
        status(state) {
            if (state.isLoading) {
                return '加载中...'
            } else if (state.user) {
                return '已登录'
            } else {
                return '登录'
            }
        }
    },
    actions: {
        async feachLogin(ctx, payload) {
            ctx.commit('setIsLoading', true);
            const resp = await login(payload.userName, payload.passWord);
            ctx.commit('setUser', resp);
            ctx.commit('setIsLoading', false);
            return resp;
        },
        async feachWhoAmI(ctx) {
            ctx.commit('setIsLoading', true);
            const resp = await whoAmI();
            ctx.commit('setUser', resp);
            ctx.commit('setIsLoading', false);
        },
        async feachLoginOut(ctx) {
            ctx.commit('setIsLoading', true);
            const resp = await loginOut();
            ctx.commit('setUser', resp);
            ctx.commit('setIsLoading', false);
        }
    }
}