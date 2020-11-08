import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import MyRoutes from './routes'

//I can give it whatever name I want in line 5

Vue.use(VueResource);
Vue.use(VueRouter);

/*I register the route in this new VueRouter Instance using the routes property
 the mode property is used to and by default it is equal/set to hash*/ 
const router = new VueRouter({
  routes: MyRoutes,
  mode: 'history'
});

//Trimming down its size to 100 characters
Vue.filter('snippet', function(val){
  //because the return type is a string I can append the ... which means there is more to 
  return val.slice(0,100)+"...";
});

/*I created a new vue instance which is looking for #app and I have to specify in this instance
which router I want to use
*/
new Vue({
  el: '#app',
	//App is what's known as the root component
  render: h => h(App),
  router: router
})
