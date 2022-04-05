<template>
<div  v-loading="isLoading" ref="homeContainer" class="home-container" @wheel=mouseScroll>
  <ul class="slideShow-container" @transitionend=transitionend
   :style="{
    marginTop: marginTop,
  }">
    <li v-for="item in data" :key=" item.id">
      <SlideShow 
      :carousel=item 
      />
      {{index + 1 }}
    </li>
  </ul>
  <span class="icon-container icon-up"  @click=" changeIndex(index-1)" v-show="index>0"><Icon type="up" /></span>  
  <span class="icon-container icon-down"  @click="changeIndex(index+1)" v-show="index<data.length-1"><Icon type="down" /></span>  
  <ul class="indicator-container">
    <li v-for="(item,i) in data" :key="item.id" @click="changeIndex(i)"
    :class="{
      active:index===i,
    }">
    </li>
  </ul>
</div>

</template>

<script>
// import {getBanner}from "@/api/banner"
import SlideShow from "./slideShow"
import Icon from "@/components/icon"
import {mapState} from "vuex";
// import feachData from "@/mixins/feachApi"
export default {
  components: {
    SlideShow,
    Icon,
  },
  // mixins:[feachData([]),],
  data(){
    return {
      homeHeight:0,
      index:0,
      isScroll:false,
    }
  },
  destroyed(){
    window.removeEventListener("resize",this.handleResize);
  },
  methods: {
    // async feachData(){
    //   return await getBanner();
    // },
    changeIndex(newIndex){
      this.index= newIndex;
    },
    handleResize(){
       this.homeHeight = this.$refs.homeContainer.clientHeight;//父容器高度
    },
    // window.addEventListener('DOMMouseScroll', wheel, false);
    mouseScroll(e){
      if(this.isScroll){
        return
      }
      if(e.deltaY < -5 && this.index !== 0 ){//上一个
        this.index --;
        this.isScroll=true;
      }else if(e.deltaY > 5 && this.index !== this.data.length-1 ){
        this.isScroll=true;
        this.index ++;
      }
    },
    transitionend(){
      this.isScroll=false;
    },
  },
  mounted(){
    this.homeHeight = this.$refs.homeContainer.clientHeight;//父容器高度
    window.addEventListener("resize",this.handleResize);
  },
  computed:{
    ...mapState('banner',['isLoading','data']),
    marginTop(){
      return -this.index * this.homeHeight + "px";//移动高度
    },
  },
  created(){
    this.$store.dispatch('banner/featchBanner',)
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/hunhe.less";
@import "~@/styles/var.less";
@import "~@/styles/global.less";
@gulp:25px;
@big:7px;
.home-container{
  overflow: hidden;
  height:100%;
  width:100%;
  position: relative;
            //
            // border: 1px solid #000;
            // width:300px;
            // height:200px;
            // overflow:visible;
            // margin: 100px auto;
  .slideShow-container{
  .parentBig();
  transition: all 1s;
  li{
    width:100%;
    height:100%;
  }
  }
.icon-container {
  cursor: pointer;
  position: absolute;
  top: @gulp;
  left: 50%;
  color: @gray !important;
  transform: translate(-50%,0);
  &.icon-up{
    animation: jump 2s infinite;
  }
  &.icon-down{
    top:auto;
    bottom: @gulp;
    animation: jump-down 2s infinite;

  }
  @five:10px;
  @keyframes jump {
     0%{
       transform:translate(-50%, @five);
     } 
     50%{
       transform:translate(-50%, 0);
       
     }
     100%{
       transform:translate(-50%, @five);
       
     }
  };
  @keyframes jump-down {
     0%{
       transform:translate(-50%, @five);
     } 
     50%{
       transform:translate(-50%, 0);
       
     }
     100%{
       transform:translate(-50%, @five);
       
     }
  };
}
.indicator-container{
  position: absolute;
  right: @gulp;
  top: 50%;
  transform: translateY(-50%);
  li{
    height: @big;
    margin:5px 0 ;
    width: @big;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color:@lightWords;
    &.active{
      background-color:@danger;//危险
    }
  }
}
}
</style>