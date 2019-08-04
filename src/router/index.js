import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/shopping",
      component:resolve => require(["@/components/trunk/Shopping"],resolve)
    },
    {
      path:"/distribution",
      component: resolve => require(["@/components/trunk/Distribution"],resolve)
    },
    {
      path:"/me",
      component:resolve => require(["@/components/trunk/Me"],resolve)
    },
    {
      path:"/",
      redirect:"/distribution"
    }
  ]
})
