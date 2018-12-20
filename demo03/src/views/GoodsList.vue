<template>
    <div>
      商品列表
      <br>
      <span>{{$route.params.goodsId}}</span>
      <br>
      <span>{{$route.params.userName}}</span>
      <router-link to="/goods/title">title</router-link>
      <router-link to="/goods/image">image</router-link>
      <div>
        <router-view></router-view>
      </div>
      <router-link to="/car">跳转购物车</router-link>
      <router-link :to="{name:'car',params:{carid:9900}}">跳转购物车--命名路由</router-link>
      <button @click="jump">跳转到购物车页面</button>

    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        methods:{
          jump(){
            // this.$router.push('/car')
            // this.$router.push({path:'/car'})
            // this.$router.push({path:'/car',query:{goodsid:9999}})
            this.$router.push({path:'/car?goodsid=234'})
          }
        }
    }
</script>

<style scoped>

</style>
