<template>
    <div class="blogContent-container">
        <h1>{{content.title}}</h1>
        <div class="qita">
          <span>    日期:{{formatDate(content.createDate)}}</span>
          <span>    浏览:{{content.scanNumber}}</span>
          <a href="#data-form-container">    评论:{{content.commentNumber}}</a >
          <RouterLink :to="{
                name : 'CategoryBlog',
                params : {
                  categoryId:content.category.name
                }
            }">分类:{{content.category.name}}</RouterLink >
        </div>
        <div v-html="content.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import '@/styles/markdown.css';
import 'highlight.js/styles/github.css';
import {formatDate} from '@/utils';
export default {
    data() {
        return {

        }
    },
    props: {
        content:{
            type: Object,
            required: true,
        },
        
    },
    methods: {
        formatDate(date){
            return formatDate(date)
        }
    },
    
}
</script>

<style lang="less" scoped>

@import '~@/styles/var.less';
.blogContent-container{
        margin-top:20px;
        margin-left:15px;
        box-sizing: border-box;
    h1{
    margin-bottom: 10px;
    }
    .qita{
        color:@lightWords;
        font-size: 13px;
        span{
            margin-left: 5px;
        }
        a{
            margin-left: 5px;
        }
    }
    .markdown-body{
        margin-top:20px;
        font-size: 14px;
    }
}
</style>