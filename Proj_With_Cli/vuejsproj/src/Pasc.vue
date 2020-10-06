<template>
	<ul>
		<li v-for="pasc_enthus in pasc_enthusiasts">{{ pasc_enthus }}</li>
	</ul>


</template>
<script>
export default {
  data () {
    return {
    	pasc_enthusiasts: ['C', 'Assembly', 'Pasc']
    }
  } 
}
</script>

<style>
</style>
