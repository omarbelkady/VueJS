new Vue({
	el: '#vue-app',
	data: {
		age: 256837,
		x: 0,
		y: 0
	},
	methods:{
		add: function(increment){
			this.age += increment;
		},
		subtract: function(decrement){
			this.age -= decrement;
		},

		updateXY: function(event){
			this.x=event.offsetX;
			this.y=event.offsetY;
		}
	}
});
