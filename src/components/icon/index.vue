// at.alicdn.com/t/font_2970588_dgbi3e0esbs.css
<template>
  <i class="iconfont iconfont-container" :class=fontClass></i>
</template>

<script>
const classMap = {//样式映射
    home:'icon-zhuye',
    ok:'icon-zhengque',
    xinxi:'icon-xinxi',
    jinggao:'icon-jinggao',
    up:'icon-icon2',
    blog:'icon-blog',
    close:'icon-guanbi',
    weixin:'icon-weixin1',
    liuyan:'icon-liuyan',
    qq:'icon-QQ-circle-fill',
    about:'icon-about',
    github:'icon-github',
    empty:'icon-empty', 
    email:'icon-youxiang',
    code:'icon-code',
    down:'icon-xia',   
    person:'icon-gerenzhongxin',
}
export const types = Object.keys(classMap);
export default {
    name:'Icon图标',
    props: {
        type: {
            type: String,
            required: true, 
        }
    },
    computed:{//属性
        fontClass(){
            return classMap[this.type];
        },
    }
}
</script>

<style scoped>
    .iconfont {
        font-size: 26px;
        color: rgb(119, 126, 126);
    }
</style>