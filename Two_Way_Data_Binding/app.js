new Vue({
	el: '#vue-app',
	data: {
		name: "",
		major: ""
	},
	methods:{
		
		logName:function(){
			//Instead of logging to the console I update the name and major properties not using data binding but with the v-model directive
			console.log("You entered your name");
		},

		logMajor: function(){
			console.log("Major entered");	
		}
	}
});
