<template>
<div class="about-container" v-loading='!srcLoading'>
  <iframe class="about-iframe" v-if="url" :src="url" frameborder="0" 
  @load="srcLoading=true"
  ></iframe>
</div>
  
</template>

<script>
export default {
  data(){
    return {
      srcLoading:false,
      url:this.$route.params.url,
    }
  },
}
</script>

<style scoped lang="less">
  .about-container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .about-iframe {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      display: block;
    }
  }
</style>