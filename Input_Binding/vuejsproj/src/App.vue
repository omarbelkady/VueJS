<template>
      <div>
          <add-blog></add-blog>
      </div>

</template>

<script>
import addBlog from './components/addBlog.vue';
export default {
  //line 15 is how I register a component to able to use it
  //left is the name you would like to register it by and the right value is the value you want to map it to
  //line 3 is how I nest a component
  components:{
    'add-blog':addBlog
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
