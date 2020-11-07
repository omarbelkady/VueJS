import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
//main.js is the first file that gets run when running my application

//now that I imported VueResource I tell Vue I want to use it
Vue.use(VueResource);

/*Now I want to call my custom directive first argument I pass is the directive name and the second argument passed in 
is an object which will control the functionality of the directive

the bind method fires when the directive is bind to the element meaning whenever it makes a connection.
The logic inside the bind function is used to control what the directive does. The bind function takes three parameters:
first parameter is the element, second parameter is the binding element(information about the connection) and the third parameter is the virtual node
which is not used that often

The element(first parameter is the <h2 v-cstsffb>{{ ablog.title }}</h2> it is on )

I am going to give the element a random background color
*/
Vue.directive('cstsffb',{
  bind(elem, binding, virtnode){
    elem.style.color="#"+Math.random().toString().slice(2,8);
  }
});

//Registering the directive globally
Vue.directive('theme',{
  bind(elem, binding, virtnode){
    if(binding.value=="wide"){
      elem.style.maxWidth = "1200px";
    }
    else if(binding.value=="narrow"){
      elem.style.maxWidth = "560px";
    }
    //Checking if the argument has some value
    if(binding.arg=='column'){
      elem.style.background='#ddd';
      elem.style.padding='20px';
    }
  }
});


//I created a new vue instance which is looking for #app
new Vue({
  el: '#app',
	//App is what's known as the root component
  render: h => h(App)
})
