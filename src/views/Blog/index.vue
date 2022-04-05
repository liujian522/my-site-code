<template>
  <div class="blog-container">
    <Layout>
      <BlogList />
      <template #right>
        <div class="right-container">
          <BlogType />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "@/views/Blog/components/BlogList";
import BlogType from "@/views/Blog/components/BlogType";
export default {
  components: {
    Layout,
    BlogList,
    BlogType,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="less" scoped>
.blog-container {
  height: 100%;
  width: 100%;
  .right-container {
    position: relative;
    width: 200px;
    height: 100%;
    overflow: hidden;
  }
}
</style>