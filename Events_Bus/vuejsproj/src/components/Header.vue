<template>
  <header>
      <h1 v-on:click="changeTheTitle">{{title}}</h1>
  </header>
</template>

<script>
//I import the event bus
import { bus } from '../main';

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
        title: 'Nelan Enjoys to Write Java'
    }
  },
  methods:{
    changeTheTitle: function (){
      //this.title="Nelan Enjoys To Write Machine Code"
      //I will now emit an event instead and call it 
      //I will also listen for this event in the root component(App.vue)
      //this.$emit('changeTheTitle','Nelan Enjoys To Pascal and Cobol');
      
      //Edit the title here
      this.title='Nelan Enjoys To Write Pascal and Cobol'

      //Now I will use the event bus to emit the event
      bus.$emit('titleChanged', 'Nelan Enjoys To Write Pascal and Cobol');
    }
  },
  //Using a lifecycle hook which will fire when the component is first created
  //and I set up an event listener on the bus
  created(){
    bus.$on();
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
