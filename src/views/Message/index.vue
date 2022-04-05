<template>
  <div class="message-container" ref="container">
    <BlogComment
      :isMore="isMore"
      :title="'留言板'"
      :subTitle="data.total + ''"
      :list="data.rows"
      :listLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import BlogComment from "@/components/BlogComment";
import { postMessage, getMessage } from "@/api/postMessage";
import feachApi from "@/mixins/feachApi";
import setScroll from "@/mixins/setScroll";
export default {
  mixins: [feachApi([]), setScroll("container")],
  components: {
    BlogComment,
  },
  methods: {
    async handleSubmit(formData,callback) {
      let result = await postMessage({
        ...formData,
      });
      this.data.rows.unshift(result);
      this.data.total++;
      callback("留言成功");
    },
    async feachData() {
      return await getMessage();
    },
    async handleScrollMiXins() {
      //
      this.$Bus.$emit("scroll", this.$refs.container);
      if (this.isLoading) {
        return;
      }
      const clientHeight = this.$refs.container.clientHeight;
      const scrollTop = this.$refs.container.scrollTop;
      const scrollHeight = this.$refs.container.scrollHeight;
      if (scrollHeight - (clientHeight + scrollTop) < 80) {
        await this.getMoreComments();
      }
    },
    async getMoreComments() {//滑动到底部，就调用此方法
      if (this.isMore) {//没有更多数据，直接返回了
        return;
      }
      this.page++;
      this.isLoading = true;
      const resp = await getMessage(this.page, this.limit);
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.sortData();
      this.isLoading = false;
    },
  },
  data() {
    return {
      data: {
        rows: [],
        total: "0",
      },
      page: 1,
      limit: 10,
    };
  },
  computed: {
    isMore() {
      return this.data.rows.length >= this.data.total;
    },
  },
};
</script>

<style lang="less" scoped>
.message-container {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  justify-content: center;
  display: flex;
  .blogComment-container {
    width: 80%;
  }
}
</style>