import { getBanner } from '@/api/banner.js';
export default {
    namespaced: true,
    state: {
        isLoading: false,
        data: [],
    },
    mutations: { //数据突变，通过函数改变store的数据
        setIsLoading(state, payload) {
            state.isLoading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async featchBanner(ctx) {
            if (ctx.state.data.length > 0) {
                return
            }
            ctx.commit('setIsLoading', true);
            const resp = await getBanner();
            ctx.commit('setData', resp)
            ctx.commit('setIsLoading', false);
        },
    }
}