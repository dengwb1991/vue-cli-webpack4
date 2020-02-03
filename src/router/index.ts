import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

import HelloWorld  from '@/components/HelloWorld.vue'
Vue.use(Router)
const routes: RouteConfig[] = [
  {
    path: '/',
    component:HelloWorld
  }
]
export default new Router({
  routes
})