<template>
<div class="imageLoader-container">
    <img :src=placeholder
    class="placeholder"
    alt="占位图"
    v-if="!everyDown"
    >
    <img :src=src
    class="origin"  
    @load='imgLoaded'
    :style="{
        opacity:originOpacity,
        transition:duration + 'ms',
    }"
    >
</div>
     
</template>

<script>

export default {
    name: "imageLoader",
    props: {
        src:{
            type: String,
            required: true,
        },
        placeholder:{
            type: String,
            required: true,
        },
        duration:{
            type: Number,
            default:500,
        },
    },
    data(){
        // 通过二个数据控制
        return {
            originLoaded: false,//控制透明度
            everyDown: false,//控制是否删除图片元素
        }
    },
    computed: {
        originOpacity(){
            let opacity;
            opacity = this.originLoaded? 1:0; 
             return opacity;
        },
},
    methods:{
        imgLoaded(){
            this.originLoaded = true;
            setTimeout(() =>{
                this.everyDown = true;
            },this.duration)
            this.$emit('load');//抛出事件完成
        }
    }
}

</script>

<style lang="less" scoped="true">
@import '~@/styles/hunhe.less';
    .imageLoader-container{
        overflow: hidden;
        .parentBig();
        position: relative;
        img{
            .selfFill();
            object-fit: cover;
            &.origin{
                opacity: 0;
            }
            &.placeholder{
                filter: blur(.3vw);
            }
        }
}
</style>