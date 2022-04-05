<template>
  <div class="details-container">
    <Layout>
      <div class="auto-container" v-loading="isLoading" ref="container">
        <BlogContent :content="data" v-if="!isLoading" />

        <BlogComment
          title="评论列表"
          :subTitle="'' + listData.total"
          :listLoading="listLoading"
          :list="listData.rows || []"
          :isMore="isMore"
          @submit="handleSubmit"
          v-if="!isLoading"
        />
      </div>

      <template #right>
        <div class="right-container" v-loading="isLoading">
          <Doc :list="data.toc" v-if="!isLoading" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Doc from "./Doc.vue";
import BlogContent from "./BlogContent.vue";
import Layout from "@/components/Layout";
import { getBlogType, getComment, postComment } from "@/api/blog.js";
import feachData from "@/mixins/feachApi.js";
import BlogComment from "@/components/BlogComment";
import setScroll from "@/mixins/setScroll.js";
export default {
  data() {
    return {
      listLoading: false,
      listData: {
        total: 0,
        rows: [],
      },
    };
  },
  components: {
    Layout,
    Doc,
    BlogContent,
    BlogComment,
  },
  mixins: [feachData({}), setScroll("container")],
  computed: {
    idPageLimit() {
      return {
        detailsId: this.$route.params.detailId,
        page: 1,
        limit: 10,
      };
    },
    isMore() {
      return this.listData.rows.length >= this.listData.total;
    },
  },
  methods: {
    async feachData() {
      const res = await getBlogType(this.$route.params.detailId);
      return res;
    },
    async getMoreComments() {
      //滑动到底部，就调用此方法
      if (this.isMore) {
        //没有更多数据，直接返回了
        return;
      }
      this.idPageLimit.page++;
      this.listLoading = true;
      const resp = await getComment(
        this.idPageLimit.detailId,
        this.idPageLimit.page,
        this.idPageLimit.limit
      );
      this.listData.total = resp.total;
      this.listData.rows = this.listData.rows.concat(resp.rows);
      this.sortListData();
      this.listLoading = false;
    },
    sortListData() {
      this.listData.rows.sort((a, b) => {
        return b.createDate - a.createDate;
      });
    },
    async handleSubmit(formData, callback) {
      let result = await postComment({
        ...formData,
      });
      this.listData.rows.unshift(result);
      this.listData.total++;
      callback("评论成功");
    },
    async handleScrollMiXins() {
      this.$Bus.$emit("scroll", this.$refs.container);
      // console.log('卷去高度',this.$refs.container.scrollTop);
      // console.log('可见高度',this.$refs.container.clientHeight);
      // console.log('总高度',this.$refs.container.scrollHeight);
      if (this.listLoading) {
        return;
      }
      const clientHeight = this.$refs.container.clientHeight;
      const scrollTop = this.$refs.container.scrollTop;
      const scrollHeight = this.$refs.container.scrollHeight;
      if (scrollHeight - (clientHeight + scrollTop) < 80) {
        await this.getMoreComments();
      }
    },
  },
  async created() {
    this.listData = await getComment(
      this.idPageLimit.detailId,
      this.idPageLimit.page,
      this.idPageLimit.limit
    );
    this.sortListData();
  },
  mounted() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 1000);
  },
};
</script>

<style lang="less" scoped>
.details-container {
  height: 100%;
  width: 100%;
  .auto-container {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  .right-container {
    position: relative;
    width: 200px;
    height: 100%;
    overflow-y: scroll;
  }
}
</style>