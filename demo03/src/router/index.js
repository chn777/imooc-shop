import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goods/:goodsId',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/goods/:goodsId/user/:userName',
      name: 'goodsList',
      component: GoodsList
    }
  ]
})
