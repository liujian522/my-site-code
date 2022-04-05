<template>
  <form
    id="data-form-container"
    @submit.prevent="handleSubmit"
    class="inputBox-container"
    ref="form"
  >
    <div class="divInput">
      <input
        type="text"
        placeholder="用户昵称"
        class="nickName"
        maxlength="10"
        v-model="formData.nickname"
      />
      <span class="example">{{ formData.nickname.length }}/10</span>
      <p class="nickNameHint">{{ error.nickname }}</p>
    </div>
    <div class="commentBox">
      <textarea
        cols=""
        rows=""
        type="text"
        class="comment"
        placeholder="请输入内容"
        maxlength="300"
        v-model="formData.content"
      ></textarea>
      <p class="commentHint">{{ error.content }}</p>
    </div>
    <button type="submit" :disabled="isSubmiting" class="submit">
      {{ isSubmiting ? "提交..." : "提交" }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  computed: {},
  methods: {
    handleSubmit() {
      if (!this.formData.nickname) {
        this.error.nickname = "请填写昵称";
      } else {
        this.error.nickname = "";
      }
      if (!this.formData.content) {
        this.error.content = "请填写内容";
      } else {
        this.error.content = "";
      }
      if (this.error.nickname || this.error.content) {
        return;
      }
      this.isSubmiting = true;
      this.formData.blogId = this.$route.params.detailId;
      this.$emit("submit", this.formData, (msg) => {
        showMessage({
          content: msg,
          type: "ok",
          container: this.$refs.form,
          callBack: () => {
            this.isSubmiting = false;
            this.formData.nickname = "";
            this.formData.content = "";
          },
        });
      }); //让父组件做，还要清空评论。
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";

.inputBox-container {
  font-size: 14px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  input,
  textarea {
    outline: none;
    border: 1px dashed black;
  }
  .divInput {
    position: relative;
    .nickName {
      width: 250px;
      padding: 0.5em;
    }
    .example {
      position: absolute;
      left: 230px;
      color: @lightWords;
      top: 4px;
    }
  }
  .commentBox {
    margin-top: 2em;
    .comment {
      padding: 1em;
      width: 90%;
      height: 60px;
      resize: none;
    }
  }
  .nickNameHint,
  .commentHint {
    color: @warn;
    margin: 0.2em 0;
    position: absolute;
  }
  .submit {
    width: 70px;
    padding: 0.5em;
    margin-top: 2em;
    background: @primary;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: darken(@primary, 10);
    }
    &:disabled {
      background: darken(@warn, 20%);
      cursor: not-allowed;
    }
  }
}
</style>