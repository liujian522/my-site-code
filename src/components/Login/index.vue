<template>
  <form class="login-container" @submit.prevent="handleSubmit">
    <div>
      <span :class="{active:isShow}" @click="handleClick">账号登录</span>
      <span :class="{active:!isShow}" @click="handleClick">二维码登录</span>
    </div>
    <div class="loginName" v-if="isShow">
      <div class="name">
        <input
          v-model="user.userName"
          id="userName"
          type="text"
          placeholder="手机号/用户名/邮箱"
        />
      </div>
      <div class="passWord">
        <input
          v-model="user.passWord"
          id="passWord"
          type="password"
          placeholder="密码"
        />
      </div>
      <div>
        <button>登录</button>
      </div>
    </div>
    <div class="loginCode" v-if="!isShow">
      <img :src="codeSrc" alt="" />
    </div>
    <div>
      <p>
        阅读并接受本站<span class="text">用户协议</span> 和
        <span class="text">隐私政策</span>
      </p>
    </div>
    <div>
      <span>默认账号admin 密码123123</span>
    </div>
  </form>
</template>

<script>
function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}
export default {
  data() {
    return {
      codeSrc: "https://img.wenhairu.com/images/2022/01/20/HEBjd.md.jpg",
      isShow: true,
      farst: null,
      user: {
        userName: "",
        passWord: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      if(!this.user.userName || !this.user.passWord){
        alert("请正确输入账号或密码")
        return;
      }
      const targetUrl = this.$route.query.targetUrl;
      this.$router.push({ name: "Loading", query: { targetUrl } });
      const resp = await this.$store.dispatch("person/feachLogin", this.user);
      if (!resp) {
        //登陆失败时
        this.user = {};
        alert("账号或密码错误");
      }
    },
    handleClick(event) {
      const targetDom = event.target;
      if (this.farst !== targetDom) {
        //不是同一个元素处理样式
        this.farst = targetDom;
        this.isShow = !this.isShow;
      }
    },
  },
  created() {
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.login-container {
  height: 50%;
  width: 333px;

  margin: 100px auto;
  div {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    &.loginName {
      display: flex;
      flex-direction: column;
      div {
        width: 100%;
        input {
          flex: 1 1 auto;
          border: 1px solid rgb(202, 198, 198);
          outline: none;
          border-radius: 8px;
          height: 30px;
          padding: 8px;
        }
        button {
          outline: none;
          border: none;
          cursor: pointer;
          height: 40px;
          font-size: 16px;
          width: 100%;
          border-radius: 8px;
          background: rgb(151, 192, 178);
        }
      }
    }
    &.loginCode {
      height: 100%;
      width: 100%;
      img {
        height: 60%;
        width: 60%;
      }
    }
    .text {
      color: @primary;
      cursor: pointer;
    }
    & > span {
      font-size: 18px;
      margin: 0 10px;
      cursor: pointer;
      &.active {
        position: relative;
        &:after {
          display: block;
          content: "";
          height: 2px;
          width: 100%;
          background: @primary;
          position: absolute;
        }
      }
    }
  }
}
</style>