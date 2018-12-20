<template>
    <div>
      <h1>
        购物车页面
      </h1>
      <span>
          路由参数<span>{{$route.params.carid}}</span><br/>
          跳转参数<span>{{$route.query.goodsid}}</span>
      </span>
    </div>

</template>

<script>
    export default {
        name: "Car"
    }
</script>

<style scoped>

</style>
