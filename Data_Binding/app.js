new Vue({
	el: '#vue-app',
	data: {
		name:'2526-IS-A-Assembly-Enthusiasts',
		job:'Assembly Developer',
		website:'http://aboutalan.herokuapp.com',
		//Actually aboutalanisapascalenthus.herokuapp.com
		websiteTag: '<a href="https://www.tutorialspoint.com/assembly_programming/index.htm">Fav Website of Nelan</a>'
	},
	methods:{
		greet: function(period){
			return 'Hello There '+ period + ' you are: '+this.name + 'and you have an '+this.job;
		}
	}
});
