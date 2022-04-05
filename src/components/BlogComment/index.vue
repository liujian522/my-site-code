<template>
  <div class="blogComment-container">
    <InputBox 
        v-on='$listeners' 
    />
    <Comment 
        :title="title"
        :subTitle='subTitle'
        :list='list'    
    />
    <div class="loading"  v-loading='listLoading' >{{isMore ? '没有更多数据' : ''}}</div>
  </div>
</template>

<script>
import InputBox from "./inputBox.vue";
import Comment from "./comment.vue";
export default {
  components: {
    InputBox,
    Comment,
  },
  data() {
    return {};
  },
  props:{
      isMore:{
        type: Boolean,
        default: false,
        required:true,
      },
      title: {
          type: String,
          default: "",
      },
      subTitle:{
          type: String,
          default: ""
      },
      list: {
          type: Array,
          default: []
      },
      listLoading:{
          type: Boolean,
          default: false, 
      },
  },
  methods: {
      // handleSubmit(formData,callback){
      //     this.$emit('submit',formData,callback)
      // }
  },
  created(){
  }
};
</script>

<style lang="less" scoped>
.blogComment-container {
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
}
.loading{
  height: 100px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>