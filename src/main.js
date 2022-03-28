import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import Vant from 'vant';
import plugins from '@/plugins/plugins'
import 'vant/lib/index.css';
import '@/js/rem'
import "./style/index.css"

Vue.use(plugins)
Vue.use(Vant);
Vue.use(ElementUI)
Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
   require("./mock/index.js")
}

new Vue({
   router,
   render: (h) => h(App),
}).$mount("#app");