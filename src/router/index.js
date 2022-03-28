import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: "/saishi",
    name: "saishi",
    component: () => import('@/views/SaiShi.vue'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/advertise",
    name: "advertise",
    component: () => import("../views/Advertise.vue"),
  },
  {
    path: "/hailuo",
    name: "hailuo",
    component: () => import('@/views/hailuo.vue')
  },
  {
    path: "/shaky",
    name: "Shaky",
    component: () => import("../views/Shaky.vue")

  },
];

const router = new VueRouter({
  routes,
});

// 权限管理 路由守卫 
router.beforeEach(function (to, from, next) {
  if (to.path === '/login') {
    next()
  } else {
    let token = localStorage.getItem('token')
    if (token) return next()
    if (!token) return next({
      path: '/login'
    })
  }
})

export default router;