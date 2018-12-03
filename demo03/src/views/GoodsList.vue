<template>
    <div>
      商品列表
      <br>
      <span>{{$route.params.goodsId}}</span>
      <br>
      <span>{{$route.params.userName}}</span>
    </div>
</template>

<script>
    export default {
        name: "GoodsList"
    }
</script>

<style scoped>

</style>
