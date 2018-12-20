<template>
  <div class="hello">
    <button v-on:click="handleGet">GET</button>
    <button @click="handlePost">POST</button>
    <button v-on:click="handleJONSP">JSONP</button>
    <button v-on:click="handleHttp">HTTP</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted () {
    this.$http.interceptors.push( (request,next) =>
    {
        console.log("ok");
        next(response =>
        {
          return response;
        });

    });
  },
  methods: {
    handleGet () {
        this.$http.get('@/../static/package.json',
            {
              params:{
                userID:123
              },
              headers:{
                token:"abc"
              }
            }).then(data=>
                {
                  console.log(data);
                },err=>{
                  console.log(err);
                })
    },
    handlePost () {
        this.$http.post(
          '@/../static/package.json',
          {userid:"a001"},
          {headers:{access_token:"hello"}})
          .then(
            sucss=>
            {
              console.log(sucss)
            },
            err=>
            {
              console.log(err)
            })
    },
    handleJONSP () {
        this.$http.jsonp('https://www.imooc.com/course/AjaxCourseMembers?ids=798').then(
          succ=>
          {
            console.log(succ)
          },
          err=>
          {
            console.log(err);
          })
    },
    handleHttp () {
      this.$http({
        url:'@/../static/package.json',
        method:"GET",
        params:{key:1},
        headers:{token:123},
        timeout:5,
        before() {
          console.log('init')
        }
      }).then(
        ok => {
          console.log(ok)
        },
        no => {
          console.log(no)
        });
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
