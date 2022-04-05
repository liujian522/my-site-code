<template>
  <!-- v-if='pageNumber>1' 页码数大于1才显示分页 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a
      href="JavaScript:void(0)"
      @click="handleClick(1)"
      :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a
      href="JavaScript:void(0)"
      @click="handleClick(current - 1)"
      :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      href="JavaScript:void(0)"
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      >{{ n }}</a
    >
    <a
      href="JavaScript:void(0)"
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      href="JavaScript:void(0)"
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>
<script>
export default {
  name: "pager分页",
  props: {
    current: {
      //当前页码
      type: Number,
      required: false,
      default: 1,
    },
    total: {
      //总数据
      type: Number,
      required: false,
      default: 0,
    },
    limit: {
      //页容量
      type: Number,
      required: false,
      default: 10,
    },
    visibleNumber: {
      //可见页码数
      type: Number,
      required: false,
      default: 10,
    },
  },
  computed: {
    //计算属性
    pageNumber() {
      //总页码数
      return Math.ceil(this.total / this.limit);
    },
    numbers() {
      let nums = [];
      for (let i = this.min; i <= this.max; i++) {
        nums.push(i);
      }
      return nums;
    },
    min() {
      //显示出的最小数字
      let min = this.current - Math.floor(this.visibleNumber / 2);
      min = min < 1 ? 1 : min;
      return min;
    },
    max() {
      //
      let max = this.min + this.visibleNumber - 1;
      return (max = max > this.pageNumber ? this.pageNumber : max);
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    &.disabled {
      color: @dark;
      cursor: not-allowed;
    }
    &.active {
      font-weight: bold;
      color: @words;
      cursor: text;
    }
  }
}
</style>


