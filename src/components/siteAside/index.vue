<template>
  <div class="siteAside-container">
    <div class="avatar-container">
      <Avatar
        v-if="data.avatar"
        :url="data.avatar"
      />
    </div>
    <div class="menu-container">
      <Menu />
    </div>
    <div class="contact-container">
      <Contact />
    </div>
    <div class="beizhu">
      <span>{{data.icp}}</span>
    </div>
  </div>
</template>

<script>
import Avatar from "../avatar";
import Menu from "./menu";
import Contact from "./contact";
import {mapState} from "vuex";
export default {
  name: "siteAside",
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: {
      ...mapState('global',['data'])
  },
  updated(){
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/hunhe.less";
@import "~@/styles/var.less";
.siteAside-container {
  .selfFill(relative);
  .avatar-container {
    position: relative;
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-container {
    width: 100%;
    height: 180px;
    position: relative;
    margin-bottom: 20px;
  }
  .beizhu {
    width: 100%;
    margin-top: 50px;
    color: @words;
    text-align: center;
    span {
      font-size: 10px;
    }
  }
}
</style>