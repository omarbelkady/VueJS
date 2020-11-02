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
  },
  //lifecycle hooks ------ created is a good place to go and fetch any data you wish to get e.g. from a DB
  beforeCreate(){
    alert("Before Create");
  },
  created(){
    alert("Component Has Just Been Created");
    //This is a good place to go and fetch some data.
  },
  beforeMount(){
    alert("Component has not been mounted yet");
  },
  mounted(){
    alert("Component has been mounted");
    //Mounted lifecycle hook is a good place to manipulate the dom once it(component) has been mounted
    //Nothing will appear in the screen until this stage
  },
  beforeUpdate(){
    alert("before Update");/*If Vue Detects any changes then it will run this piece of code before the change
    has been updated in the DOM.*/
  },
  updated(){
    alert("Updated");//Vue Runs this piece of code AFTER the DOM has been updated and obviously rerendered.  
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