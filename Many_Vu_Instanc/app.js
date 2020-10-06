//This is a vue instance stored in a variable called myinst
//This is used to control an area on a webpage with this element
var myinst = new Vue({
	el: '#vue-app-myinst',
	data: {
		title: 'Vue App My First Instance'	
	},
	computed: {
		greet: function(){
			return 'This is from my first instance :)';
		}

	}
});


var mysecinst = new Vue({
	el: '#vue-app-mysecinst',
	data: {
		title: 'Vue App My Second Instance'
	},
	computed: {
		greet: function(){
			return 'This is from my second instance :)';
		}
	},
	methods:{
		//Remember failure to place this function here or outside of the mysecinst will result in undefined
		changingTheTitle: function(){
			myinst.title = "I have successfully changed The Title";
		}
	}

	
});
mysecinst.title= "I have changed the Second Instance Title From the Outside";
