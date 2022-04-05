<template>
  <div class="test-container">
      <Layout>
          <template>
              <div class="main">
                    中间hukhukssdf啊
                    啊啊撒
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
  </div>
</template>

<script>
import SiteAside from '@/components/siteAside'
import Layout from './'
export default {
    name: 'test-container',
    components: {
        SiteAside,
        Layout,
    },
}
</script>

<style lang="less" scoped>
    .test-container{
        width: 60%;
        height: 600px;
        outline: 1px solid #000;
        .left{
            width: 180px;
            height: 100%;
            background-color: red;
        }
        .main{
            width:100%;
            height:100%;
            min-width: 200px;
            background-color:#008c8c;
        }
        .right{
            width: 150px;
            height: 100%;
            background-color:#f90;
        }
    }

</style>