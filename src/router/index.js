import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import in_theaters from '@/components/in_theaters'
import Top from '@/components/top250'
import coming_soon from '@/components/coming'
import detail from '@/components/detail'
import search from '@/components/search'

//针对本次项目可以使用一个组组件取代其他路由组件，为了练习父子组件通讯

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home_page',component: Home},
    { path: '/', redirect: '/home_page' },
    { path: '/in_theaters/:page?', component: in_theaters},
    { path: '/coming_soon/:page?', component: coming_soon},
    { path: '/top250/:page?', component: Top},
    { path: '/details/:id', component: detail},
    { path: '/search', component: search},
   
  ]
})
