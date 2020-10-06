<template>
  <div>
    <h1>{{ title }}</h1>
    <pasc></pasc>
  </div>
</template>

<script>
import Pasc from './Pasc.vue'
export default {
//Registering the component
components: {
	'pasc': Pasc
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
</script>

<style>
</style>
