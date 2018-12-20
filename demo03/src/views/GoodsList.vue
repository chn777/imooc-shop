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

    </div>
</template>

<script>
    export default {
        name: "GoodsList"
    }
</script>

<style scoped>

</style>
