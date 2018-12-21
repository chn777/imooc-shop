<template>
  <div class="hello">
    <div>
      <p>VUE-Resource</p>
      <button v-on:click="handleGet">GET</button>
      <button @click="handlePost">POST</button>
      <button v-on:click="handleJONSP">JSONP</button>
      <button v-on:click="handleHttp">HTTP</button>
    </div>

    <hr>
    <div>
      <p>Axios</p>
      <button @click="handleA_GET">A_GET</button>
      <button @click="handleA_POSG">A_POST</button>
      <button @click="handleA_OPT">A_OPTION</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted () {
    // this.$http.interceptors.push( (request,next) =>
    // {
    //     console.log("ok");
    //     next(response =>
    //     {
    //       return response;
    //     });
    //
    // });
    this.$axios.interceptors.request.use(conf=>{
      console.log('init');
      console.log(conf)
      return conf;
    })

    this.$axios.interceptors.response.use(rep=>{
      console.log('over');
      console.log(rep);
      return rep;
    })
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
    },
    handleA_GET () {
        this.$axios.get('@/../static/package.json',
          {
            params:{userid:9999},
            headers:{access_token:'23rfdfadjfjdfdjsfijdkfdnjgwejrqefdnvcvfdnvmndja'}
          })
          .then(succ =>{
            console.log(succ);
          })
          .catch(e => {
            console.log(e)
          })
    },
    handleA_POSG () {
      this.$axios.post('@/../static/package.json',{userid:9999},{headers:{token:9234}})
        .then(succ=>{
          console.log(succ)
        })
        .catch(err=>{
          console.log(err)
        })
    },
    handleA_OPT () {

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
