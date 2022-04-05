<template>
  <div class="blogType-container" v-loading="isLoading">
    <ul
      :class="{
        allClass: !allClassifications,
      }"
      class="all"
      v-if="!isLoading"
    >
      <li><span @click="handAll">全部分类   <span class="allNumber">{{allNumber}}篇</span></span></li>
    </ul>
    <List :list="isSelectArr" @select="handSelected" />
  </div>
</template>

<script>
import List from "@/views/Blog/components/List";
import feachData from "@/mixins/feachApi.js";
import { getBlogTypes } from "@/api/blog.js";

export default {
  mixins: [feachData([])],
  components: {
    List,
  },
  data() {
    return {

    };
  },
  methods: {
    handAll(){
      if(!this.$route.params.categoryId){
        return
        }
      this.$router.push({
        name: "Blog",
        query:this.query,
      });
    },
    // data:[
    //   {articleCount:6,id:1,name:1,},{},
    // ],
    handSelected(newCla) {
     const newCategoryId = newCla.id;
     //避免重复点击
     if(this.$route.params.categoryId === newCategoryId){
        return
        }
        // console.log(newCategoryId,this.$route.params.categoryId);
      this.$router.push({
        name: "CategoryBlog",
        query:this.query,
        params: {//动态部分
          categoryId: newCategoryId,
        },
      });
    },
    async feachData() {
      return await getBlogTypes();
    },
  },
  computed: {
    query(){
      return {
          page: 1,
          limit: this.$route.query.limit,
        }
    },
    classification() {
      //分类id
      return this.$route.params.categoryId || -1; //分类默认全部分类
    },
    allNumber(){
     return this.isSelectArr.map((a) => {
       return(a.articleCount)
        }).reduce((a,b) =>{
         return a+b;
       })
    },
    isSelectArr() {
      // 需要数据{ name: "a", isActive: false },
      let arr = [];
      this.data.forEach((item) => {
        if (item.id === this.classification) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }//分类6 (文章30条)
        arr.push(item);
      });
      return arr;
    },
    allClassifications() {
      return (
        this.isSelectArr.filter((item) => {
          return item.isActive === true;
        }).length > 0
      );
    },
  },
  updated() {
    // console.log(this.isSelectArr,this.allClassifications);
    // console.log(this.allNumber)
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blogType-container {
  margin-left: 1rem;
  height: 100%;
  width: 100%;
  font-size: 15px;
  margin-top: 1rem;
.all {
    li {
      span {
        font-weight: bold;
        cursor: pointer;
        .allNumber{
          color:@lightWords;
          font-size:12px;
        }
      }
    }
  }
.allClass {
      li {
      span {
          color:@primary;

        .allNumber{
          color:@primary;
        }
      }
    }
  }
}
</style>