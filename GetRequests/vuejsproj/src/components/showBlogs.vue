<template>
      <div id="show-the-blogs">
         <h1>All The Blog Articles of the 27-375 32</h1>
         <div v-for="ablog in blogs" class="single-blog" :key="ablog">
             <h2>{{ ablog.title }}</h2>
             <article>{{ ablog.body }}</article>
         </div>
      </div>

</template>

<script>

export default {

 
  data(){
    return {
       blogs:[]
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
