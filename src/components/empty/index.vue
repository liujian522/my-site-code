<template>
    <div class="empty-container">
        <Icon type="empty" />
        <div> {{text}}</div>
    </div>
</template>

<script>
import Icon from '../icon';
export default {
    components: {
        Icon,
    },
    name: 'empty',
    props: {
        text: {
            type: String,
            default: '无数据',
        },
    }
}
</script>

<style lang="less" scoped>
// @import '../../styles/hunhe.less';
@import '~@/styles/hunhe.less';
@import '~@/styles/var.less';
    .empty-container{
    text-align: center;
    .blockJuZhong();
    .iconfont-container{
        color: @lightWords;
        font-size:90px;
    }
    div{
        color: @lightWords;
    }
}
</style>