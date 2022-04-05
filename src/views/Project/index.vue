<template>
  <div class="project-container" v-loading="isLoading">
    <div class="project" ref="container">
      <h2>项目和效果</h2>
      <div v-for="item in data" :key="item.id" class="item">
        <a :href="item.url" target="_black" >
          <img v-lazy="[item.thumb]" :src="item.thumb" :alt="item.name" class="item-img" />
        </a>
        <div>
          <h4>项目/效果名称:{{item.name}}</h4>
          <a :href="item.github" target="_blank" class="github">github地址</a>
          <div
            class="description"
            v-for="(description, i) in item.description"
            :key="i"
          >
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import setScroll from "@/mixins/setScroll.js";
export default {
  mixins: [setScroll("container")],
  data() {
    return {};
  },
  computed: {
    ...mapState("demo", ["data", "isLoading"]),
  },
  created() {
    this.$store.dispatch("demo/featchDemo");
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  cursor: default;
  color: rgb(63, 52, 52);
  height: 100%;
  width: 100%;
  position: relative;
  .project {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    h2 {
      height: 10%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-left: 10%;
      color: #008c8c;
    }
    .item {
      margin-top: 0.2em;
      display: flex;
      padding: 5px;
      padding-left: 2%;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(0, 0, 0, 0);
      &:hover {
        color: inherit;
        border-bottom: 2px solid rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        transform: translateY(-2px);
        transition: 0.5s;
      }
      img {
        height: 130px;
        width: 190px;
      }
      & > div {
        margin-left: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1em;
        .description {
          margin-right: 1em;
        }
        .github {
          color: @primary;
        }
      }
    }
  }
}
</style>