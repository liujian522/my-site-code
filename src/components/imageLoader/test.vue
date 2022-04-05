<template>
<div class="test-container"> 
    <ImageLoader 
    :src=src
    :placeholder=placeholder
    @load=handleLoader
    :duration=duration
    />
</div>
  
</template>

<script>
import ImageLoader from "./"
export default {
    name: "test测试",
    components:{
        ImageLoader,
    },
    data() {
        return {
        src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage66.360doc.com%2FDownloadImg%2F2013%2F11%2F0708%2F36512556_53.jpg&refer=http%3A%2F%2Fimage66.360doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641629257&t=771da68f59ee098e67eabbb8c318c823',
        placeholder:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-4o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D1f7b774adc0735fa91a546bdab612385%2F9825bc315c6034a8eabc6dd0c313495409237601.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641631939&t=3b4c4732b581c6d5b4437064bdf8e168",
        duration:1000,
        }
    },
    methods: {
        handleLoader(){
            console.log('ok');
        },
    },
}
</script>

<style lang="less" scoped>
    .test-container{
        margin: 0 auto;
        height: 200px;
        width: 300px;
    }
</style>