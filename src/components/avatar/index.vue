<template>
  <img 
  :src="url" 
  :style="{
      width: size+'px',
      height: size+'px',
  }" 
  class="avatar-container" 
   />
</template>

<script>
export default {
    name: 'Avatar头像',
    props:{
        url:{
            type:String,
            required:true,
            default:'',
        },
        size:{
            type:Number,
            default:100,//默认值
        },
        
    },
}
</script>

<style scoped>
/* 带有作用域的样式文件 */
    .avatar-container {
       border-radius: 50%;
       object-fit: cover; 
       display:block;
    }
</style>