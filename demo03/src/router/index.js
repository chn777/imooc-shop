import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Car from '@/views/Car'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:GoodsList,
        title:Title,
        image:Image
      }
    },
    {
      path: '/goods',
      name: 'goodsList',
      component: GoodsList,
      children:[
        {
          path: 'title',
          name: 'title',
          component: Title
        },
        {
          path: 'image',
          name: 'image',
          component: Image
        }
      ]
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
    },
    {
      path: '/car/:carid',
      name: 'car',
      component: Car
    }
  ]
})
