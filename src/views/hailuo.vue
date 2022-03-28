<template>
    <div class="box">
        <div class="head-t">
            <van-icon name="wap-nav"  class="wa"/>
            <div class="imgs"><img src="	https://static.hellorf.com/hellorf-wap/d/static/images/logo.a358c3ae247a92a97d48a57bdb65ecaa.svg" alt=""></div>
            <div class="dl"><span>登录</span></div>
        </div>
        <div class="inp">
            <van-icon name="search" />
            <span>搜索</span>
            <!-- <van-search
  v-model="value"
  shape="round"
  background="#f8f9fb"
  class="in"
  placeholder="搜索"
/> -->
        </div>
        <div class="swp">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>
        <div>
            <span></span><span></span>
        </div>

        <div class="lg">
            <div class="lg-d">
                <div class="tc">灵感图册</div>
                <div class="ck">查看全部></div>
            </div>
        </div>


        <div class="ls">
            <div class="ls-l" v-for="(item,index) in list.list" :key="index">
                <div class="imgl"><img :src="item.image" alt=""></div>
                <div class="tit">
                    <p>绿色家园</p>
                    <span>共75个作品</span>
                </div>
            </div>

            
        </div>

        <div class="ll"> 
            <div class="lx" v-for="(item,index) in title.title" :key="index">
                <div class="lx-xx"><img :src="item.image"></div>
                <div class="yc">
                    <p>演唱会</p>
                    <span>共75个作品</span>
                </div>
            </div>
        </div>

        <div class="xt">
            <p>新图速递</p>
            <img src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
            
        </div>
    </div>
</template>

<script>
import instance from '../request/api'
export default {
    name:"hailuo",
    data(){
        return {
            list:{},
            title:{},
        
        }
        

    },
    methods: {
        async getPics(){
            let {data} =await instance.get('/hailuo')
            this.list = data
            console.log(this.list)
        },
        async getTitle(){
            let {data} =await instance.get('/hailuo1')
            this.title = data
            console.log(this.title)
        }
    },
    created(){
        this.getPics(),
        this.getTitle()
      
    }

}
</script>
<style scoped>
    .box{
        padding: 0 0.5rem;
        margin:0 auto;
    }
    .head-t{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.2rem;
    }
    .wa{
        font-size: .4rem;
    }
    .imgs{
        width: 2.5rem;
        height: 0.6rem;
    }
    .dl>span{
        font-size: 0.3rem;
    }
    .inp{
        height: 1rem;
        background: #f8f9fb;
        border-radius: 0.17067rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.2rem;
    }
    .inp>input{
        border: none;
        background: #f8f9fb;
        text-align: center;
    }
    /* .inp>.in{ */
        /* font-size: 0.4rem; */
        /* height: 1rem; */
    /* } */
    .inp>span{
        font-size:0.4rem; 
        margin-left:.1rem ;
    }
    .swp{
        margin-top: .5rem;
    }



    /* swp */
    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    border-radius: .5rem;
  }
  .lg{
      margin-top: 1.4rem;
  }
.lg-d{

    display: flex;
    justify-content: space-between;
    
}
.tc{
font-size: .45rem;
}
.ck{
    font-size: .36rem;
    color: #8a8a8a;
}
.ls{

    margin-top: .5rem;
    display: flex;
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling:touch;
    
}
.ls::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.ls>.ls-l{
    position: relative;
    margin-right:.2rem ;
}

.ls>.ls-l>.tit{
    position: absolute;
    top: .7rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #fff;
}
.ls>.ls-l>.tit>p{
    font-size: .4rem;
    
}
.ls>.ls-l>.tit>span{
    font-size: .3rem;
    
}
.ls>.ls-l>.imgl{
    width: 2.5rem;
    height: 2.5rem;
}



.ll{
    margin-top: .2rem;
    display: flex;
      display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling:touch;
}
.ll::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.ll>.lx{
    margin-right: .2rem;
    position: relative;
   
}
.ll>.lx>.lx-xx>img{
    width: 2.5rem;
    height: 2.5rem;

}
.ll>.lx>.yc{
    position: absolute;
     
    top: 0.7rem;
   text-align: center;
    color: #fff;
    margin-left: .5rem;
}
.ll>.lx>.yc>p{
    font-size: .4rem;
}
.ll>.lx>.yc>span{
    font-size: .3rem;
}

.xt>p{
    margin-top: .2rem;
    font-size: .5rem;
}
.xt>img{
    margin-top: .5rem;
}
</style>