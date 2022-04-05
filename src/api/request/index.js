import axios from 'axios'; //导入axios
const ins = axios.create(); //创建实例
ins.interceptors.response.use(function(resp) {
    if (resp.data.code !== 0) { //优先处理拿到的数据
        showMessage({
            type: 'close',
            content: resp.data.msg,
        })
        return null;
    }
    return resp.data.data; //直接返回需要的数据
});
export default ins; //返回该实例方法