<template>
<!-- 书写模板 -->
<div>
  <!-- 模板 -->
  <p>app.</p>
  <Pager :current="current"  :total = 'total' :visibleNumber = 9 @pageChange='handlePage' />

</div>
</template>

<script>
import Pager from './';
export default {
  components: {
    Pager,
},
data() {
  return {
    vis: true,
    current:1,
    total:200,
  } 
},
methods: {
  handlePage(newPage){
    console.log(newPage);
    this.current = newPage;
  }
}
}
</script>

<style lang="less">

</style>