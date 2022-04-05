<template>
<div class="test-container">
    <SiteAside

      />
</div>

</template>

<script>
import SiteAside from './'
export default {
    name: 'tets-SiteAside',
    components: {
        SiteAside,
    },
}
</script>

<style lang="less" scoped>
    .test-container{
        position: relative;
        height: 100vh;
        width: 150px;
        background-color:rgb(19, 15, 15);
        
    }
</style>