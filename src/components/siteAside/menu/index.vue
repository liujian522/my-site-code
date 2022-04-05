<template>
  <div class="menu-container">
    <small v-if="data.siteTitle">{{ user?user.loginId : data.siteTitle }}<span>的小窝</span></small>
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :key="item.name"
      :to="{ name: item.name }"
    >
      <Icon :type="item.icon" />{{ item.title }}
    </RouterLink>
  </div>
</template>

<script>
import Icon from "@/components/icon";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          exact: true, //激活精确匹配
          name: "Home",
          title: "首页",
          icon: "home",
        },
        {
          exact: false, //激活精确匹配
          name: "Blog",
          title: "文章",
          icon: "blog",
        },
        {
          exact: true, //激活精确匹配
          name: "About",
          title: "关于我",
          icon: "xinxi",
        },
        {
          exact: false, //激活精确匹配
          name: "Project",
          title: "项目&效果",
          icon: "code",
        },
        {
          exact: true, //激活精确匹配
          name: "Message",
          title: "留言板",
          icon: "liuyan",
        },
        {
          exact: true, //激活精确匹配
          name: "Person",
          title: `个人中心 - 登录`,
          icon: "person",
        },
      ],
    };
  },
  computed: {
    ...mapState("global", ["data"]),
    ...mapState("person", ["user"]),
    ...mapGetters("person",["status"]),
    // status(){
    //     this.items[this.items.length - 1].title = `个人中心 - ${this.$store.getters['person/status']}`
    //     return this.$store.getters['person/status']
    // }
  },
  watch: {
      status(val,oldVla){
            this.items[this.items.length - 1].title = `个人中心 - ${val}`
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/hunhe.less";
@import "~@/styles/global.less";
.menu-container {
  font-size: 18px;
  small {
    text-align: center;
    margin-bottom: 0.5rem;
    color: rgb(189, 165, 165);
    cursor: pointer;
    span {
      color: @gray;
    }
  }
  background-color: transparent;
  .selfFill(relative);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  a {
    height: 20%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 2rem;
    font-size: 15px;
    color: @gray;
    .iconfont-container {
      font-size: 14px;
      color: @gray;
      margin-right: 1rem;
    }
    a {
      margin-left: 1rem;
    }
    &:hover {
      background-color: @dark;
    }
    &.router-link-active {
      background-color: #2d2d2d;
    }
  }
}
</style>