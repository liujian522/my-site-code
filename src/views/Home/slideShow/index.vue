<template>
  <div class="slideShow-container" ref="parent"
   @mousemove="move($event)"
   @mouseout="out"
   >
    <div class="img" ref="child">
      <ImageLoader  
        @load="changeText"
        :src="url + carousel.bigImg"
        :placeholder="url + carousel.midImg"
      />
    </div>
    <div class="miaosu">
      <h3 class="title" ref="title">
        {{carousel.title}}
      </h3>
      <div class="description" ref="description">
        {{carousel.description}}
      </div>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/imageLoader"
import url from '@/utils/URL_IMG';
export default {
  data(){
    return {
      titleWidth:0,
      descriptionWidth:0,
      parent:{},
      child:{},
      mouseX:0,
      mouseY:0,
      url,
    }
  },
  components: {
    ImageLoader,
  },
  props: {
    carousel:[],
  },
  mounted(){
    this.titleWidth = this.$refs.title.clientWidth; 
    this.descriptionWidth = this.$refs.description.clientWidth; 
    this.setAllWidths();
    this.setPosition(-this.gulpWidth/2,-this.gulpHeight/2); 
    window.addEventListener('resize',this.setAllWidths);
  },
  destroyed(){//以销毁
    window.removeEventListener('resize',this.setAllWidths);
  },
  computed: {
    gulpWidth(){
      return this.child.width - this.parent.width;
    },
    gulpHeight(){
      return this.child.height - this.parent.height;
    },
    leftMoved(){
      return -this.gulpWidth / this.parent.width * this.mouseX;
    },
    topMoved(){
      return -this.gulpHeight / this.parent.height * this.mouseY;
    },
  },
  methods: {
    changeText(){
      this.changeDom(this.$refs.description)
      this.changeDom(this.$refs.title)
    },
    changeDom(dom) {
      dom.style.width = 0;
      dom.style.opacity = 1;
      dom.clientWidth;
      if(dom.className === 'description'){
        dom.style.transition = "3s 1s";
        dom.style.width = this.descriptionWidth + 'px';
       }else{
        dom.style.transition = "3s";
        dom.style.width = this.titleWidth + 'px';
      }
    },
    setAllWidths(){
      this.parent.width = this.$refs.parent.clientWidth;
      this.parent.height = this.$refs.parent.clientHeight;
      this.child.width = this.$refs.child.clientWidth
      this.child.height = this.$refs.child.clientHeight
    },
    setPosition(left,top){
      this.$refs.child.style.transform = `translate(${left}px,${top}px)`;
      // this.$refs.child.style.top = top + 'px';
    },
    move(e){
      const rect= this.$refs.parent.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      // console.log(this.leftMoved,this.topMoved);
      this.setPosition(this.leftMoved,this.topMoved);
    },
    out(){
          this.setPosition(-this.gulpWidth/2,-this.gulpHeight/2); 
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/hunhe.less";
@import "~@/styles/var.less";
@import "~@/styles/global.less";

  .slideShow-container{
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .img{
      position: absolute;
      height: 110%;
      width: 110%;
      transition: 1s;
}
    .miaosu{
      position: absolute;
      left: 10%;
      top: 50%;
      transform: translateY(-50%);
      color: @lightWords;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      text-shadow: 1px 0px 0px rgba(0,0,0,0.5),
      -1px 0px 0px rgba(0,0,0,0.5),
      0px -1px 0px rgba(0,0,0,0.5),
      0px 1px 0px rgba(0,0,0,0.5),;
      .title{
        margin-bottom:20px;
        opacity: 0;
        white-space: nowrap;
        font-size:25px ;
      }
      .description{
        overflow: hidden;
        opacity: 0;
        white-space: nowrap;
        font-size: 20px;
      }
    }
  }
</style>