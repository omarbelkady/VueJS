new Vue({
	el: '#vue-app',
	data: {
		/*7+2+7+2+2+5=25(Sum Of Pascal)*/
		age: 25,
		a: 0,
		b: 0
	},
	/*methods:*/
	computed: {
		addToA: function(){
			console.log('addToA');
			return this.a + this.age;
		},
		addToB: function(){
			console.log('addToB');
			return this.b + this.age;
		}
	}
});
