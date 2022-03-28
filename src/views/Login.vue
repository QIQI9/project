<template>
  <div class="login">
    <header>
      <van-nav-bar title="登录站酷网" left-arrow @click-left="onClickLeft" />
    </header>

    <main>
      <el-form class="form" :model="form" :rules="rules">
        <el-form-item prop="name">
          <el-input
            placeholder="手机号/邮箱"
            v-model="form.name"
            class="name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="密码长度8-20位"
            v-model="form.password"
            class="password"
          ></el-input>
        </el-form-item>
        <div class="danxuan">
          <input type="checkbox" checked />
          <p class="p">我已阅读并同意站酷的</p>
          <p>《用户协议》</p>
          <p class="p">与</p>
          <p>《隐私政策》</p>
        </div>
        <el-form-item class="button">
          <button type="primary" @click="submitfn">登录</button>
        </el-form-item>
      </el-form>
      <div class="footer">
        <p>短信登录</p>
        <p>找回密码</p>
      </div>

      <div class="tip">
        <p>账号名：12345</p>
        <p>密码：0000</p>
      </div>
    </main>
  </div>
</template>

<script>
import instance from "@/request/api";
export default {
  name: "Login",
  data() {
    //   自定义正则格式验证
    let namefn = function (rule, value, callback) {
      console.log(rule);
      let reg = /^\w{2,11}\w$/; //
      if (reg.test(value)) return; //格式正确，不处理
      return callback(new Error("手机号/邮箱格式错误"));
    };
    let passwordfn = function (rule, value, callback) {
      console.log(rule);
      let reg = /^\w{3,6}$/;
      if (reg.test(value)) return; // 格式正确 不处理
      return callback(new Error("密码格式错误"));
    };
    return {
      form: {
        name: "12345", //12345
        password: "", //0000
      },
      rules: {
        name: [{ validator: namefn, trigger: "blur" }],
        password: [{ validator: passwordfn, trigger: "blur" }],
      },
      newdebouncefn: null,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/" });
    },
    //  登录业务
    async loginfn() {
      let name = this.form.name;
      let password = this.form.password;
      let { data } = await instance.post("/login", { name, password });
      console.log(data);

      // 跳转验证
      if (data.message === "fail") return this.$message.error("登录失败");
      if (data.message === "success") {
        // 储存token
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            this.$router.push({ path: "/" });
          },
        });
      }
    },
    // 点击提交登录业务
    submitfn() {
      this.newdebouncefn();
    },
  },
  created() {
    this.loginfn(), (this.newdebouncefn = this.debounce(this.loginfn, 2000));
  },
};
</script>
<style scoped>
.van-nav-bar {
  background-color: #ffd100;
}
.login >>> .van-nav-bar__content {
  height: 1.2rem;
}
.login >>> header .van-icon {
  color: #fff;
  font-size: 0.5rem;
}
.login >>> .van-nav-bar__title {
  font-size: 0.38rem;
  font-weight: 400;
  height: 100%;
  line-height: 1.2rem;
}
.login-a p {
  text-align: center;
  line-height: 1rem;
  font-size: 16px;
}
.form {
  padding: 0 1rem;
  padding: 0.8rem 0.8rem 0;
}
.login >>> .el-input__inner {
  height: 1.2rem;
  border-color: #dddddd;
  font-size: 0.35rem;
}
.login >>> .standard-input-size {
  color: #757475;
}
.danxuan {
  display: flex;
}
.danxuan input {
  width: 0.3rem;
  margin-right: 0.1rem;
}
.p {
  color: #cfcfcf;
}
.button {
  padding: 0.5rem 0 0 0;
}
.button button {
  width: 100%;
  height: 1.2rem;
  border: none;
  color: #000;
  font-size: 0.45rem;
  background: #f8d347;
  border-radius: 0.15rem;
  background-color: #ffd100;
}
.footer {
  display: flex;
  justify-content: space-between;
  padding: 0 0.8rem 0 0.8rem;
}
.footer p {
  font-size: 0.35rem;
}
.footer p:nth-child(2) {
  color: #999999;
}

.tip {
   text-align: center;
   color: #999999;
   margin-top: 50px;
}
</style>