<template>
  <header>
      <h1 v-on:click="changeTheTitle">{{title}}</h1>
  </header>
</template>

<script>
//as you can see in my project structure I created three components header, footer Pasc component
//then I imported them here App.Vue(aka the root component) and I nested them in the template
export default {
  //I will now recieve that prop from the root component(App.vue file)
  props:{
    title: {
      type: String
    }
  },
  
  data(){
    return {
        //as you can see I have nested the component title within my h1 tag
        title: 'Nelan Enjoys to Write LLCode'
    }
  },
  methods:{
    changeTheTitle: function (){
      this.title="Nelan Enjoys To Write Machine Code"
    }
  }
}

</script>

<style scoped>
header{
    background: lightblue;
    padding: 10px;
}
/*I want to style h1 too*/
h1{
    color: #1B29C7;
    text-align: center;
}

</style>
