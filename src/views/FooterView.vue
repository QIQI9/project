<template>
  <div class="footer">
    <router-link to="/" class="logo">
      <img src="https://static.zcool.cn/git_z/z/common/images/svg/logo.svg" />
    </router-link>
    <p class="text">打开站酷发现更好的设计</p>
    <router-link to="" class="download">下载APP</router-link>
    <div class="copyright">Copyright© 2006 - 2022 ZCOOL</div>
  </div>
</template>
<script>
export default {
  name: "FooterView",
};
</script>
<style scoped>
.footer {
  width: 100%;
  height: 6.56rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.37rem;
  color: #282828;
  padding: 0.8rem 0 0.27rem;
  background: url(https://static.zcool.cn/zcool/mobile/images/footer-background.png);
  background-size: 10rem 6.56rem;
  box-sizing: border-box;
}
.logo img {
  width: 2.67rem;
}
.text {
  font-size: 0.48rem;
  margin-top: 1rem;
}
.download {
  width: 3.6rem;
  height: 1.07rem;
  line-height: 1.07rem;
  margin-top: 0.4rem;
  font-size: 0.43rem;
  text-align: center;
  border: 0.03rem solid #282828;
  border-radius: 0.53rem;
}
.copyright {
  font-size: 0.27rem;
  margin-top: 1.49rem;
}
</style>
