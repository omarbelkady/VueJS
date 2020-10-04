new Vue({
	el: '#vue-app',
	data: {
		name: 'CLover',
		job: 'Pascal Developer'
	},
	//How To create a method
	methods:{
		greet: function(){
			return 'Hello There '+ this.name+' apparently you are a LLP enthusiast because you work as a '+ this.job;
		}
	}
});
