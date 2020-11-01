<template>
	<div id="pasc">
    <ul>
      <li v-for="pasclov in pasc" v-on:click="pasclov.show=!pasclov.show" :key="pasclov.id">
          <h2>{{ pasclov.name }}</h2>
          <h3 v-show="pasclov.show">{{ pasclov.favHobby }}</h3>
      </li>
    </ul>
    <button v-on:click="deletePasc">Delete PascLover</button>
  </div>
</template>
<script>
export default {
  props:{
 //   ['pasc'],
    pasc:{
     type: Array,
     required: true
    }
  },
  data () {
    return {
      
    }
  },
  methods:{
    deletePasc:function(){
      this.pasc.pop();
    }
  }
}
</script>
<style scoped>
#pasc{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

</style>