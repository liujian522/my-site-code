<template>
  <div class="test-container">
    <List :list="list" @select="handSelected" />
  </div>
</template>

<script>
import List from "./";
export default {
  components: {
    List,
  },
  data() {
    return {
      list: [
        { name: "a", isActive: false },
        { name: "b", isActive: false },
        { name: "c", isActive: false },
        {
          name: "d",
          isActive: false,
          children: [
            { name: "d_1", isActive: false },
            {
              name: "d_2",
              isActive: true,
              children: [
                { name: "d_2_1", isActive: false },
                { name: "d_2_2", isActive: false },
                { name: "d_2_3", isActive: false },
              ],
            },
            { name: "d_3", isActive: false },
          ],
        },
      ],
    };
  },
  methods: {
    handSelected(item){
        console.log(item);
        item.isActive = true;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.test-container {
  position: relative;
  height: 100vh;
  width: 300px;
  outline: 1px solid #000;
}
</style>