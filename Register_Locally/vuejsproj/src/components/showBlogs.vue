<template>
      <div id="show-the-blogs">
        <input type="text" v-model="search" placeholder="search blogs"/>
        <h1>All The Blog Articles of the 27-375 32</h1>
        <div v-for="ablog in theFilteredBlogs" class="single-blog" :key="ablog">
            <h2 v-cs375fbcolor>{{ ablog.title | to-uppercase }}</h2>
            <article>{{ ablog.body | snippet }}</article>
        </div>
      </div>

</template>

<script>

export default {

  data(){
    return {
       blogs:[],
       search: ''
    }
  },
  methods:{
   
    },
  created(){
      this.$http.get("http://json.placeholder.typicode.com/posts").then(function(data){
          console.log(data);
          //we want just 10 not 100
          this.blogs=data.body.slice(0,10);
      });
  },
  computed: {
    theFilteredBlogs: function(){
      /*
        returning an updated array ... it is essentially taking the current blogs array with some elements
        filtered out of it. If found return true and keep it in the array. If not found return false
        and pop it out of the array. I use the prebuilt vuejs function match to see if there is the search
        term is in the array
      */
      return this.blogs.filter((ablog) => {
        return ablog.title.match(this.search);
      });
    }
  },
  filters:{
    toUppercase(val){
      return val.toUpperCase();
    }
  },
  directives:{
    'cs375fbcolor':{
      bind(elem, binding, vnode){
          elem.style.color="#"+Math.random().toString(16).slice(2,8);
      }
    }
  }
}
</script>

<style>
#show-the-blogs{
    max-width: 800px;
    margin: 0 auto;
}

.single-blog{
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
    background: #eee;
}
</style>