import Vue from 'vue'
import App from './App.vue'



//I created a new vue instance which is looking for #app
new Vue({
  el: '#app',
	//App is what's known as the root component
  render: h => h(App)
})
