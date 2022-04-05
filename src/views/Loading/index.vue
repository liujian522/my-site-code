<template>
  <div class="loading-container" id="loading">
    <div>正在更新登录状态...请稍后</div>
  </div>
</template>

<script>
export default {
  //需要监控仓库都变化
  created() {
    this.outWatch = this.$watch(
      //该函数会返回一个函数，调用该函数会取消监控
      () => {
        //参数1 监控的目标
        return this.$store.getters["person/status"];
      },
      (val) => {
        //新值旧值
        if (val !== "加载中...") {
          if (!this.$route.query.targetUrl) {
            this.$router.push({ name: "Home" });
          } else {
            this.$router.push({ path: this.$route.query.targetUrl });
          }
        }
      },
      {
        //深度监控
        immediate: true,
      }
    );
  },
  destroyed() {
    this.outWatch(); //取消监控
  },
};
</script>

<style lang="less" scoped>
.loading-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>