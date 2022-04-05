<template>
  <div class="test-container">
      <Menu
          
          />
  </div>
</template>

<script>
import Menu from "./"
export default {
    name: "test-Menu",
    components: {
        Menu,
    },

}
</script>

<style lang="less" scoped>
    .test-container{
        width: 200px;
        height: 250px;
        background-color:rgb(63, 56, 56);
        position: relative;
        border-radius:5px;
        overflow: hidden;
    }
</style>