<template>
<div class="test-container">
<Contact 
/>
</div>

</template>

<script>
import Contact from './';
export default {
    name: 'test-Contact',
    components: {
        Contact,
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
    .test-container{
        background-color:@dark;
        width: 200px;
        height: 160px;
        margin: 0 auto;
        position: relative;
        top: 100px;
}
</style>