<template>
      <div>
         <router-view></router-view>
      </div>

</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
export default {
  //line 16 is how I register a component to able to use it
  //left is the name you would like to register it by and the right value is the value you want to map it to
  //line 3 is how I tell vue to load a component in a specific location when I visit a specific route
  components:{
    'add-blog':addBlog,
    'show-blogs':showBlogs,
    'list-blogs':listBlogs
  },
  data(){
    return {
       
    }
  },
  methods:{
   
    }
  }
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito Semibold';
}
</style>
