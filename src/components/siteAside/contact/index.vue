<template>
  <ul class="contact-container">
    <li>
      <Icon type="github" />
      <a :href="data.github" target="_blank"> {{ githubName }}</a>
    </li>
    <li>
      <Icon type="email" />
      <a :href="'mailto:' + data.mail">{{ data.mail }}</a>
    </li>
    <li>
      <Icon type="qq" />
      <div class="img-container">
        <img
          v-show="handleLoad"
          @load="handleLoad"
          :src="data.qqQrCode"
          alt="qq"
        />
      </div>
      <a :href="'tencent://message/?uin=' + data.qq + '&Site=&Menu=yes'">
        {{ data.qq }}</a
      >
    </li>
    <li>
      <Icon type="weixin" />
      <div class="img-container">
        <img
          v-show="handleLoad"
          @load="handleLoad"
          :src="data.weixinQrCode"
          alt="weixin"
        />
      </div>
      <a href="javaScript:void(0)">{{ data.weixin }}</a>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import Icon from "@/components/icon";
export default {
  name: "contact",
  components: {
    Icon,
  },
  computed: {
    ...mapState("global", ["data"]),
    githubName() {
      const reg = /(?<=[http[s]?\/\/github.com\/]*).*/g;
      const githubName = this.data.github || "";
      let githubstr = "";
      githubName.replace(reg, (str) => {
        githubstr = str;
      });
      return githubstr;
    },
  },
  methods: {
    handleLoad() {
      return true;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/hunhe.less";
@import "~@/styles/global.less";
.contact-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .parentBig();
  box-sizing: border-box;
  background-color: transparent;
  padding: 1rem 0.5rem;
  li {
    position: relative;
    color: @lightWords;
    .iconfont-container {
      font-size: 15px;
      margin-right: 0.5rem;
    }
    &:hover {
      .iconfont-container {
        color: @primary;
      }
      div.img-container {
        padding-bottom: 100%;
        &::before {
          bottom: -11px;
          left: 50%;
          border: 6px solid transparent;
          border-top-color: #fff;
        }
      }
    }
    a {
      font-size: 15px;
      font-weight: 400;
    }
    div.img-container {
      width: 100%;
      height: 0;
      padding-bottom: 00%;
      position: absolute;
      bottom: 100%;
      transition: all 0.5s;
      &::before {
        display: block;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        bottom: -6px;
        left: 50%;
        border: 6px solid transparent;
        transition: all 0.5s;
        transform: translateX(-50%);
      }
      img {
        .parentBig();
        position: absolute;
        border-radius: 0.5rem;
      }
    }
  }
}
</style> 