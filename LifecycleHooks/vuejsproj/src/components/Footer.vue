<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>


</template>

<script>

//I import the event bus
import { bus } from '../main';

export default {
  props: {
    title: {
      type: String
    }
  },
  data(){
    return {
      copyright: 'Copyright 2020 Vue Nelan Is A Pasc Lover'
    }
  },
  created(){
    bus.$on("titleChanged",(data)=>{
      this.title=data;
    })
  }
}

</script>

<style scoped>
footer{
  background: #222;
  padding: 6px;
}
p{
  color: lightgreen;
  text-align: center;
}
</style>
