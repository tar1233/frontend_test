import Vue from "vue";
import VueRouter from "vue-router";
import Feed from './View/Feed.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./View/Home.vue")
    },
    {
      path: "/feed",
      name: "feed",
      component: Feed
    },
  ]
});