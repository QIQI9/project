import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/index.css"
import Vant from 'vant';
import 'vant/lib/index.css';
import {
   Icon
} from 'vant';

Vue.use(Icon);
Vue.use(Vant);
import setRem from './style/vue-rem'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import plugins from '@/plugins/plugins'
import '@/js/rem'
import "./style/index.css"

Vue.use(plugins)
import {
   Swipe,
   SwipeItem
} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);


import {
   Lazyload
} from 'vant';
Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
   lazyComponent: true,
});

Vue.use(Vant);
Vue.use(ElementUI)
Vue.config.productionTip = false;
if (process.env.NODE_ENV === 'development') {
   require('@/mock/index')
}

new Vue({
   router,
   render: (h) => h(App),
}).$mount("#app");
window.addEventListener('resize', function () {
   setRem(750, 100);
});