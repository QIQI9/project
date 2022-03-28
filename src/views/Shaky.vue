<template>
  <div class="shaky">
    <Header></Header>
    <div class="home">
      <h2>线上活动</h2>
      <ul class="home-list" v-for="(item, index) in arrs" :key="index">
        <li>
          <div class="img">
            <img :src="item.imgSrc" alt="" />
          </div>

          <div class="home-item">
            <p class="title">{{ item.title }}</p>
            <p class="text">{{ item.text }}</p>
            <p class="numb">
              <van-icon name="eye-o" />{{ item.integer }}
              <van-icon name="photo-o" />33
              <!-- {{item.integers}} -->
            </p>
          </div>
        </li>
        <div class="names">
          <p>{{ item.names }}</p>
          <p>进行中</p>
        </div>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./HeaderView.vue";
import Footer from "./FooterView.vue";

import axios from "axios";
export default {
  name: "Shaky",
  data() {
    return {
      arrs: null,
    };
  },
  methods: {
    async getHome() {
      let { data } = await axios.get("/api/shaky");
      this.arrs = data[0].list;
      console.log(data);
      console.log(this.arrs);
    },
  },
  created() {
    this.getHome();
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
  font-size: 0.21rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.home h2 {
  margin-bottom: 0;
  margin-top: .3rem;
}
.home-item {
  width: 3rem;
}
.home-item .title {
  font-weight: bold;
}
.home-item .numb {
  color: rgb(196, 194, 194);
  font-size: 0.18rem;
}
.home-item .numb i {
  margin-right: 0.1rem;
}
.home-item .text {
  font-size: 0.16rem;
  margin: .2rem 0;
}
.home-list li {
  display: flex;
  justify-content: space-around;

  box-sizing: border-box;
}
.home-list {
  border-bottom: 2px solid #eee;
  padding-top: 0.3rem;
  box-sizing: border-box;
}
.home-list .img {
  width: 3.17rem;
  height: 2.4rem;
}
.home-list .img img {
  width: 100%;
  height: 100%;
}
.names {
  display: flex;
  justify-content: space-between;
  font-size: 0.2rem;
  margin: .2rem .5rem;
}
</style>
