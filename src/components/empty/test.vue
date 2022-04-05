<template>
  <div>
    <div class="test-container">
     <Empty 
    :text=text
    />
    </div>
  
  </div>
</template>

<script>
    import Empty from './';
export default {
    components: {
        Empty,
    },
    data() {
            return {
              text: '无数据',
            }
    },
}
</script>

<style lang="less" scoped="true">
div.test-container{
    width: 50vw;
    height: 100vh;
    position: relative;
    border: 1px solid #000;
}
</style>