<template>
  <ul class="list-container">
    <li v-for="(item, i) in getSelectList" :key="i">
      <span
        :class="{
          active: item.isActive,
        }"
        @click="handClick(item)"
      >
        {{ item.name }}
        <span class="articleCount" v-if="item.articleCount"
          >{{ item.articleCount }}篇</span
        >
      </span>

      <List :list="item.children" @select="handClick" />
    </li>
  </ul>
</template>

<script>
import {debounce} from "@/utils";
export default {
  name: "List",
  data() {
    return {
      activeAnchor: "",
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handClick(item) {
      this.$emit("select", item);
    },
    setSelect(dom) {
      if(!dom){
        return;
      }
      this.activeAnchor='';
      const range = 200;
      for (const item of this.getDom) {
        if(!item){
          continue;
        }
       const top = item.getBoundingClientRect().top;
        if(top>range){//在下面
          return;
        }
          //在上面
          this.activeAnchor = item.id;
      }
    },
  },
  mounted(){
//     export default (fn, timers = 100) => {
//     let timer = null;
//     return (...args) => {
//         clearInterval(timer);
//         timer = setTimeout(() => {
//             console.log(...args);
//             fn(...args);
//         }, timers);
//     }
// }
     this.setDebounce = debounce(this.setSelect,300);
    this.$Bus.$on('scroll',this.setDebounce);//监听事件总线
  },
  destroyed(){
    this.$Bus.$off('scroll',this.setDebounce);
  },
  computed: {
    getSelectList () {
      const getToc = (list = []) => {
        return list.map(item => {
          return {
            ...item,
            isActive:typeof item.isActive==='boolean' ? item.isActive:item.anchor === this.activeAnchor,
            children: getToc(item.children),
          };
        });
      };
      return getToc(this.list);
    },
    getDom() {//保存所有目录对应id的dom元素数组
      const doms = [];
      const addDom = (toc) => {
        for (const item of toc) {
          doms.push(document.getElementById(item.anchor));
          if (item.children && item.children.length) {
            addDom(item.children);
          }
        }
        return doms;
      };
      addDom(this.getSelectList);
      return doms;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/hunhe.less";
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.list-container {
  overflow-y: auto;
  li {
    span {
      cursor: pointer;
      .articleCount {
        font-size: 12px;
        color: @lightWords;
      }
    }
    min-height: 30px;
    line-height: 30px;
  }
  .list-container {
    li {
      margin-left: 1rem;
      min-height: 30px;
      line-height: 30px;
    }
  }
  span.active {
    .articleCount {
      color: @primary;
    }
    color: @primary;
  }
}
</style>