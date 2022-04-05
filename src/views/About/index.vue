<template>
<div class="about-container" v-loading='isLoading || !srcLoading'>
  <iframe class="about-iframe" v-if="src" :src="src" frameborder="0" 
  @load="srcLoading=true"
  ></iframe>
</div>
  
</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
    return {
      srcLoading:false,
    }
  },
  created() {
    this.$store.dispatch('about/featchAbout')
  },
  computed: {
    ...mapState('about',{
      src:'data',
      isLoading:'isLoading'
    })
  }
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