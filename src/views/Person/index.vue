<template>
  <div class="person-container">
    <div>
      <span>用户名：{{ user ? user.loginId : "未登录" }}</span>
    </div>
    <button class="outLogin" @click="handleClick">退出登录</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("person", ["user"]),
  },
  methods: {
    handleClick() {
      this.$store.dispatch("person/feachLoginOut");
      this.$router.push({ name: "Loading" });
    },
  },
};
</script>

<style lang="less" scoped>
.person-container {
  .outLogin {
    border: 3px solid rgb(228, 218, 218);
    background-color: rgb(238, 231, 231);
    cursor: pointer;
    color: rgb(13, 98, 209);
  }
}
</style>