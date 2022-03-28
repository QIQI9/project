<template>
  <div class="saishi-box">
     <Header></Header>
    <ul class="saishi-main">
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.image" alt="" class="big-image" />
        <div class="zizu">
          <h4>{{ item.title }}</h4>
          <div class="saishi-wen">
            <p>{{ item.date }}-{{ item.date }}</p>
            <div class="saishi-data">
              <div>
                <img :src="item.image" alt="" class="small-image" />
                <span>{{ item.num1 }}</span>
              </div>
              <div>
                <img :src="item.image" alt="" class="small-image" />
                <span>{{ item.num2 }}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>
<script>
import instance from "@/request/api";
import Header from './HeaderView.vue';
import Footer from './FooterView.vue'
export default {
  name: "Saishi",
  data() {
    return {
      list: null,
    };
  },
  methods: {
    async getList() {
      let { data } = await instance.get("/saishi");
      console.log(data);
      this.list = data.list;
    },
  },
  created() {
    this.getList();
  },
  components:{
     Header,Footer
  }
};
</script>
<style scoped>
.saishi-box {
  width: 100vw;
  height: 100vh;
}
.saishi-main li {
  width: 100vw;
  /* border:1px solid; */
  padding: 0.3rem;
  box-sizing: border-box;
}
.big-image {
  margin: 0.1rem;
  border-radius: 0.2rem;
}
/* .zizu{
    border:1px solid;
} */
.saishi-wen {
  display: flex;
  justify-content: space-between;
  /* border:1px solid; */
  font-size: 0.12rem;
}
h4 {
  margin: 0.2rem 0;
}
.saishi-data {
  display: flex;
  justify-content: space-around;
}
.small-image {
  width: 0.3rem;
  height: 0.3rem;
  margin: 0 0.2rem;
}
.saishi-data div {
  display: flex;
  justify-content: space-between;
}
</style>