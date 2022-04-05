import { globalSet } from '@/api/globalSet'
import { setTitles } from '@/utils'
export default {
    namespaced: true,
    state: {
        data: {},
    },
    mutations: { //数据突变，通过函数改变store的数据
        setData(state, payload) {
            state.data = payload
        },
    },
    actions: {
        async getGlobalSet(ctx) {
            const resp = await globalSet();
            ctx.commit('setData', resp);
            if (resp.favicon) {
                if (document.querySelector("link[rel='shorcut icon']")) {
                    return;
                } else {
                    const link = document.createElement('link');
                    link.rel = "shorcut icon";
                    link.type = "image/x-icon";
                    link.href = resp.favicon;
                    document.querySelector('head').appendChild(link);
                }
            }
            if (resp.siteTitle) { //设置标题
                const title = resp.siteTitle;
                setTitles.setStoreTitle(title);
            }
        }
    }
}