<template>
	<div id="pasc">
    <ul>
      <li v-for="pasclov in pasc" v-on:click="pasclov.show=!pasclov.show" :key="pasclov.id">
          <h2>{{ pasclov.name }}</h2>
          <h3 v-show="pasclov.show">{{ pasclov.favHobby }}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
    	pasc: [
        {name:'Nelan',favHobby: 'CodingAssembly',show: false},
        {name:'CLover',favHobby: 'StudyingLLP',show: false},
        {name:'Pintos',favHobby: 'UnderstandingPintos',show: false},
        {name:'Compilers',favHobby: 'CS375FB',show: false}
      ]
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
