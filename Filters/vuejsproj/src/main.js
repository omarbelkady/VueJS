import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'



Vue.use(VueResource);

/*Creating my filter which takes two arguments: 1st argument(name of the filter) and the 2nd argument(function which takes a value). The value
is the data I use the filter on. So in my case it would be blog.title. All a filter is I give it an input and it returns an updated value
*/
Vue.filter('to-uppercase', function(val){
  return val.toUpperCase();
});


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
