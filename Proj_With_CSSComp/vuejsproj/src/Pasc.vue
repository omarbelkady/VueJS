<template>
	<ul>
		<li v-for="pascenth in pasc_enthusiasts">{{ pascenth }}</li>
	</ul>


</template>
<script>
export default {
  data () {
    return {
    	pascenthusiasts: ['C', 'Assembly', 'Pasc']
    }
  } 
}
</script>

<style>
</style>
