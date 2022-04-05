<template>
<div class="doc-container">
    <h3>目录</h3>
    <List 
        :list='list' @select="handSelect"
    />
</div>
    
</template>

<script>
import List from '@/views/Blog/components/List';
export default {
    components: {
        List,
    },
    props: {
        list: {
            type: Array,
        },
    },
    methods: {
handSelect(newData){
    location.hash = newData.anchor;
},
    },
}
</script>

<style lang="less" scoped>
    .doc-container{
        box-sizing: border-box;
        margin-left: 1em;
        margin-top: .5em;
        .list-container{
            font-size:14px;
        }
    }
</style>