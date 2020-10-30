<template>
  <div>
    <h1>{{ title }}</h1>
    <pascenth></pascenth>
  </div>
</template>

<script>
import Pasc from './Pasc.vue'
export default {
//Registering the component
components: {
	'pascenth': Pasc
},
  data () {
    return {
    	title: '2-56837 App File'
    }
  },
  methods:{
//	welcome: function(){
//		return "Go 53276 727225 968 557 56837";
//	}

  }
}
//Say I have two elements and I want to style one I would use the scoped in my script tag
</script>

<style scoped>
h1{
	color: blue;
}
</style>
