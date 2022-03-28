<template>
  <div id="advertise">
    <div class="top">
      <div class="icon">
        <van-icon name="wap-nav" />
      </div>
      <div class="title">站酷招聘</div>
    </div>
    <div class="nav">
      <div class="address">北京<van-icon name="arrow-down" /></div>
      <div class="ipt">
        <van-icon name="search" class="search" />
        <input type="text" placeholder="搜索职位或公司" />
      </div>
    </div>
    <div class="navbar">
      <span class="line"></span>
      <span class="text">热门职位</span>
      <span class="line"></span>
    </div>
    <ul class="list">
      <li v-for="(item, index) in arrs" :key="index">
        <div class="img">
          <img :src="item.imgSrc" alt="" />
        </div>
        <div class="detail">
          <h5 class="detail-title">{{ item.title }}</h5>
          <div class="info">
            <span class="info-name">{{ item.name }}</span>
            <span class="price">5K-8K</span>
          </div>
          <div class="detail-line"></div>
          <div class="detail-content">
            <p>北京&nbsp;|&nbsp;经验3-5年&nbsp;|&nbsp;学历不限</p>
            <p>4小时前发布</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="foot">
      <van-tabbar active-color="#ffd101" inactive-color="#fff">
        <van-tabbar-item replace to="/" icon="home-o" class="footer"
          >职位</van-tabbar-item
        >
        <van-tabbar-item replace to="/" icon="friends-o" class="footer"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Advertise",
  data() {
    return {
      show: false,
      arrs: null,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    async getData() {
      let { data } = await axios.get("/api/advertise");
      console.log(data);
      this.arrs = data[0].list;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
#advertise {
  width: 100vw;
  background: #f5f5f9;
}
.top {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffd101;
}
.icon {
  font-size: 0.48rem;
  margin-left: 0.2rem;
}
.title {
  font-size: 0.42rem;
  text-align: center;
  line-height: 0.8rem;
  color: #282828;
  flex: 1;
  text-align: center;
}
.nav {
  width: 100%;
  height: 1rem;
  padding: 0 0.4rem;
  box-sizing: border-box;
  background-color: #ffd101;
  display: flex;
  align-items: center;
}
.address {
  width: 1rem;
  background-color: #ffd101;
  display: flex;
  align-items: center;
  font-size: 0.32rem;
}
.ipt {
  width: 8rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  position: relative;
  margin-left: 0.2rem;
}
.ipt .search {
  position: absolute;
  font-size: 0.36rem;
  top: 0.12rem;
  left: 2.4rem;
}
.ipt input {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.3rem;
  font-size: 0.32rem;
  color: #999;
  text-align: center;
}
.navbar {
  width: 100%;
  height: 1.1rem;
  line-height: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.line {
  display: block;
  width: 0.2rem;
  height: 1px;
  width: 0.24rem;
  background-color: #666;
}
.text {
  font-size: 0.32rem;
  color: #666;
  margin: 0 0.2rem;
}
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
}
.list li {
  width: 100%;
  height: 2.2rem;
  padding: 0.3rem 0.4rem;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
}
.img {
  width: 1.6rem;
  height: 1.6rem;
}
.img img {
  width: 100%;
  height: 100%;
}
.detail {
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  flex: 1;
}
.detail-title {
  font-size: 0.32rem;
  color: #282828;
  text-align: left;
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-name {
  font-size: 0.28rem;
  color: #282828;
}
.price {
  font-size: 0.32rem;
  color: #ff8122;
  font-weight: 500;
}
.detail-line {
  box-sizing: border-box;
  height: 0.2rem;
  border-bottom: 1px solid #eee;
}
.detail-content {
  display: flex;
  justify-content: space-between;
  margin-top: 0.26rem;
  color: #999;
  font-size: 0.24rem;
}
.foot {
  width: 100%;
  height: 0.5rem;
  position: absolute;
  bottom: 0;
}
.footer {
  background: #282828;
}
</style>