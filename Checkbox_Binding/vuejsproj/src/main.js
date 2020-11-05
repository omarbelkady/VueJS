import Vue from 'vue'
import App from './App.vue'

//Creating an event bus and exporting it to be able to use in Footer and Header component
export const bus = new Vue();

//I created a new vue instance which is looking for #app
new Vue({
  el: '#app',
	//App is what's known as the root component
  render: h => h(App)
})
