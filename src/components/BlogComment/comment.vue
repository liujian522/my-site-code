<template>
  <div class="comment-container">
    <h4>{{ title }}({{ subTitle }})</h4>
    <div class="comment">
      <ul>
        <li v-for="(item, i) in list" :key="i">
          <div>
            <Avatar v-if="item.avatar" :url=" url + item.avatar" :size="44" />
            <div>
              <h6>{{ item.nickname }}</h6>
              <span>{{ formatDate(item.createDate, true) }}</span>
              <p>
                {{ item.content }}
              </p>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/avatar";
import { formatDate } from "@/utils";
import url from "@/utils/URL_IMG";
export default {
  components: {
    Avatar,
  },
  data() {
    return {
      url,
    };
  },
  methods: {
    formatDate(time, boolean) {
      return formatDate(time, boolean);
    },
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: [],
    },
  },
  created() {},
  updated() {
  },
};
</script>



<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.comment-container {
  width: 100%;
  h4 {
    margin: 2em 0;
  }
  .comment {
    width: 100%;
    li > div {
      display: flex;
      div {
        flex: 1 1 auto;
        position: relative;
        padding-left: 1em;
        box-sizing: border-box;
        h6 {
          color: @primary;
        }
        p {
          margin-top: 0.5em;
        }
        span {
          position: absolute;
          right: 10px;
          top: 0px;
          color: @lightWords;
          font-size: 12px;
        }
      }
    }
  }
}
</style>