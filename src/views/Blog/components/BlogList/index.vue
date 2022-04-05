<template>
  <div class="blogList-container" v-loading="isLoading" ref="container">
    <ul v-if="!isLoading">
      <li v-for="item in data.rows" :key="item.rows">
        <div class="thumb" v-if="item.thumb !== null">
          <RouterLink
            :to="{
              name: 'Blogdetails',
              params: {
                detailId: item.id,
              },
            }"
          >
            <img v-if="item.thumb" v-lazy="item.thumb" :alt="item.title" title="" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'Blogdetails',
              params: {
                detailId: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期 : {{ formatDate(item.createDate) }}</span>
            <span>浏览{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              class=""
              >分类:{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="desc">{{ item.description }}</div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading" />
    <!-- 分页放到这里 -->
    <Pager
      v-if="data.total && !isLoading"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      @pageChange="handlePage"
    />
  </div>
</template>

<script>
import Pager from "@/components/pager";
import fetchData from "@/mixins/feachApi.js";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils";
import setScroll from "@/mixins/setScroll.js";
import Empty from "@/components/empty";
export default {
  mixins: [fetchData({}), setScroll("container")],
  data() {
    return {
      data: {
        total: 0,
        rows: [],
      },
    };
  },
  components: {
    Pager,
    Empty,
  },
  computed: {
    routeInfo() {
      const categoryId = this.$route.params.categoryId || -1; //分类默认全部分类
      const page = +this.$route.query.page || 1; //当前路由页码
      const limit = +this.$route.query.limit || 10; //当前路由
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    async feachData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      ); //page = 1, limit = 10, categoryid = -1
    },
    formatDate(time) {
      return formatDate(time);
    },
    handlePage(newPage) {
      //跳转改变page的值
      if (this.routeInfo.categoryId !== -1) {
        // this.$router.push(`/article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}`)
        this.$router.push({
          name: "CategoryBlog",//匹配的name
          query: {//配置路由参数
            page: newPage,
            limit: this.routeInfo.limit,
          },
          params: {//动态路由部分
            categoryId: this.routeInfo.categoryId,
          },
        });
      } else {
        // this.$router.push(`/article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}`)
        this.$router.push({
          name: "Blog",
          query: {
            page: newPage,
            limit: this.routeInfo.limit,
          },
        });
      }
    },
  },
  watch: {
    async $route(newVla, oldVla) {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.feachData();
      this.sortData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blogList-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>