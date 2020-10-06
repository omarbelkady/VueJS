new Vue({
	el: '#vue-app',
	data: {
		output: 'Your fav lang is 727225'
	},
	methods: {
		readRefere: function(){
			//The this keyword references the current vue instance
			//This will now display a list of all the references within the given context
			//Following this.$refs I add a dot and write out which element I want to access data from
			//Followed by a dot and the name of the property in this case I want to access property value
			//entered in as input
			//console.log(this.$refs.input.value);
			//I must supply what I want to reference
			console.log(this.$refs.test.innerText);
			//I use refs to update values in our data
			this.$refs=this.$refs.input.value;
		}
	}
});
