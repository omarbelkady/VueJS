<template>
      <div id="show-the-blogs">
        <h1>All The Blog Articles of the 27-375 32</h1>
        <input type="text" v-model="search" placeholder="search blogs"/>
        <div v-for="ablog in theFilteredBlogs" class="single-blog" :key="ablog">
            <h2 v-cs375fbcolor>{{ ablog.title | to-uppercase }}</h2>
            <article>{{ ablog.body | snippet }}</article>
        </div>
      </div>

</template>

<script>
import searchMixin from '../mixins/searchMixin';

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
  },
  /*How to register a mixin */
  mixins: ['searchMixin']
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