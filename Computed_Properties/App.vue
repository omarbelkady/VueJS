<template>
	<div id="app">
		<button @click="status= !status">change status</button>
		{{ firstname }} {{ lastname }}
		<br>
		{{ getName() }}
		<br>
		{{ name }}
		<br>
		{{ status }}
		<ul>
			<li v-for="favlang in bestLangsForClover" :key="favlangs.title">{{ favlangs.title }}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data: () => {
			return {
				firstname: "Nelan",
				lastname: "theclover",
				status: false,
				favlangs: [
					{ title: "Assembly", enjoys: false },
					{ title: "Pascal", enjoys: false },
					{ title: "Java", enjoys: true },
					{ title: "LLP", enjoys: false }
				]
			}
		},
		computed: { 
			name(){
				console.log("computed");
				return this.firstname + " " + this.lastname;
			},
			bestLangsForClover(){
				return this.favlangs.filter(favlangs => favlangs.enjoys === false)
			}
			

		},
		methods:
			getName(){
				console.log("method");
				return this.firstname + " " + this.lastname;
			}
	}
</script>

<style lang="scss">
	body{
		margin: 0;
		padding: 0;
	}
</style>

