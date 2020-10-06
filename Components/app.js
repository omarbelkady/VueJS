import Vue from 'vue';
//When I create a component there will multiple instances using the same deinition
Vue.component("sayHello", {
	//I need a way to call the function that's why I create a button 
	template: '<p>This component can be recycled and 2526 56837 27736259 and {{ name }}. <button v-on:click="changeTheName">Change The Name</button></p>',
	//To output this put call sayHello in tag Format in the index.html file
	data: function(){
		return {
			name: '256837'
		}
		//If I change the data in one of the instances of the component 
		//then it won't update in another one
	},
	methods: {
		changeTheName: function(){
			this.name= 'Pascal3674874278';
		}
	}
});

//This is a vue instance stored in a variable called myinst
//This is used to control an area on a webpage with this element
var myinst = new Vue({
	el: '#vue-app-myinst'
});


var mysecinst = new Vue({
	el: '#vue-app-mysecinst'
});
mysecinst.title= "I have changed the Second Instance Title From the Outside";
