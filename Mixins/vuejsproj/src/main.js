import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);


//Trimming down its size to 100 characters
Vue.filter('snippet', function(val){
  //because the return type is a string I can append the ... which means there is more to 
  return val.slice(0,100)+"...";
});

//I created a new vue instance which is looking for #app
new Vue({
  el: '#app',
	//App is what's known as the root component
  render: h => h(App)
})
