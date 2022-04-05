<template>
  <div class="layout-container">
      <div class="left">
            <!-- <div class="left">
                  <SiteAside /> 
            </div> -->
          <slot name="left"></slot>
      </div>
      <div class="main">
          <!-- <div class="main">
                    中间内容
        </div> -->
          <slot></slot>
      </div>
      <div class="right">
            <!-- <div class="right">
                  右边内容
            </div> -->
          <slot name="right"></slot> 
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .layout-container{
        width: 100%;
        height: 100%;
        display: flex;

        .left{
            // flex: 0 0 auto;
        }
        .main{  
            flex:1 1 auto;
        }
    }
</style>