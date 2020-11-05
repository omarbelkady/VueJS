import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
//main.js is the first file that gets run when running my application

//now that I imported VueResource I tell Vue I want to use it
Vue.use(VueResource);


//I created a new vue instance which is looking for #app
new Vue({
  el: '#app',
	//App is what's known as the root component
  render: h => h(App)
})
