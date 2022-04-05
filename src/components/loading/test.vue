<template>
<div class="loading-container">
    <Loading 
    
    />
</div>
</template>

<script>
import Loading from './index.vue'
export default {
    components: {
        Loading,
    },
}
</script>

<style lang="less" scoped>
.loading-container {
    position: relative;
    // height:300px;
    // width:300px;
    // outline: 1px solid #000;

}
</style>