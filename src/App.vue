<template>
  <div class="test-container">
      <Layout ref="abc">
          <template>
              <div class="main">
                    <!-- 中间区域 -->
                    <RouterView>
                    </RouterView>
              </div>
          </template>
          <template #left>
              <div class="left">
                  <SiteAside /> 
              </div>
          </template>
          <template #right>
              <div class="right">
                  右边内容
              </div>
          </template>
      </Layout>
      <ToTop />
  </div>
 
</template>

<script>

import SiteAside from '@/components/siteAside'
import Layout from '@/components/Layout'
import ToTop from '@/components/ToTop'
export default {
    methods:{
        test(){
            console.log(this.$refs.abc);
        },
    },
    name: 'test-container',
    components: {
        SiteAside,
        Layout,
        ToTop,
    },
    created() {
        // this.$router.push({
        //     name:'Home',
        // }).then(resp=>{},err=>{},)
    }
}
</script>

<style lang="less" scoped>
  @import "~@/styles/var.less";
  @import "~@/styles/hunhe.less";
  @import "~@/styles/global.less";
    .test-container{
        font-size: 16px;
        width: 100%;
        height: 100vh;
        .left{
            width: 230px;
            height: 100%;
            background-color: @dark;
        }
        .main{
            width:100%;
            height:100%;
            min-width: 200px;


        }
        .right{
            width: 0px;
            height: 100%;
            background-color:#f90;
        }
    }

</style>