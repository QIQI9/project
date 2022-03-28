<template>
  <div class="header">
    <header>
      <router-link to="" class="logo">
        <img src="https://static.zcool.cn/git_z/z/common/images/svg/logo.svg" />
      </router-link>
      <div class="h-right">
        <router-link to="" class="download">下载APP</router-link>
        <van-dropdown-menu>
          <van-icon name="wap-nav" />
          <van-dropdown-item
            ref="item"
            :options="option1"
            v-model="value1"
            @change="changeItem(value1)"
          >
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      value1: null,
      option1: [
        { text: "搜索", icon: "search", value: 0 },
        { text: "登录 / 注册", icon: "smile-o", value: 1 },
      ],
    };
  },
  methods: {
    changeItem(value) {
       if(value===1){
          this.$router.push({path:'/login'})
       }
    }
  },
  components: {},
};
</script>
<style scoped>
header {
  height: 1.33rem;
  padding: 0 0.4rem;
  background-color: #ffd100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.logo {
  width: 2.67rem;
}
.h-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.download {
  width: 2.13rem;
  height: 0.64rem;
  line-height: 0.64rem;
  text-align: center;
  font-size: 0.32rem;
  border: 0.03rem solid #282828;
  border-radius: 0.11rem;
}
.van-dropdown-menu {
  width: 0.53rem;
  height: 0.53rem;
  margin-left: 0.53rem;
  position: relative;
}
.van-dropdown-menu .van-icon {
  font-size: 0.53rem;
  position: absolute;
  top: 0;
  left: 0;
}
.header >>> .van-dropdown-menu__bar {
  background-color: transparent;
  box-shadow: none;
  z-index: 1;
}
.header >>> .van-dropdown-menu__title {
  display: none;
}
.header >>> .van-cell {
  padding: 0.4rem;
  font-size: 0.34rem;
}
.header >>> .van-cell__left-icon {
  font-size: 0.48rem;
}
.header >>> .van-cell__value {
  display: none;
}
</style>