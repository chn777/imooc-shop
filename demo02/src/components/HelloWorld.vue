<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <span>father:{{num}}</span>
    <Conter :num="num" v-on:add="addFromSub"></Conter>
  </div>
</template>

<script>
import Conter from './Conter'
export default {
  name: 'HelloWorld',
  components: {Conter},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 10
    }
  },
  methods: {
    addFromSub (val) {
      this.num = val + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
