<template>
  <div class="toTop-container" v-show="show" @click="handleClick">
      Top
  </div>
</template>

<script>
export default {
    data(){
        return {
            show:false,
        }
    },
    created() {
        this.$Bus.$on('scroll', this.handleScroll);
        this.$Bus.$on('del',this.handleDel)
    },
    methods: {
        handleScroll(doms){
            if(!doms){
                this.show = false;
                return
                }
            const scrollTop = doms.scrollTop;
            if(scrollTop >500){
                this.show = true;
            }else{
                this.show = false;
            }
        },
        handleClick(){
            this.$Bus.$emit('setScroll',0)            
        },
        handleDel() {
            this.show = false;
        }
    },
    destroyed() {
        this.$Bus.$off('scroll', this.handleScroll)
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
    .toTop-container{
        background-color:@primary;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position:fixed;
        z-index: 99;
        right: 50px;
        bottom: 25px;
        cursor: pointer;
        color: #fff;
    }
</style>