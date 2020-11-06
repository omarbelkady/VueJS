## VueJS Repo
```javascript
//Empty Vue Default Template
new Vue({
	el: '#vue-app',
	data: {
		
		
	},
	methods:{
	 
	},

	computed: {
		

	}
});
```
```
Any pictures, audio, logos place in your assets folder in your vue proj
```


### Root Component
```
App.vue
```

### How to run your app on a specific port(55732: LLPFB)
Step 1: create a file named vue.config.js
Step 2: place the following script in it
```js
module.exports={
	devServer:{
		port: 55732
	}
}
```

### To change the port of your application dynamically
```bash
npm run serve -- --port 8080
```


### Form Handling

#### Step 0: install vee-validate
```bash
npm i vee-validate
```

#### Step 1: Incorporate in our js file
main.js
```js
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue'

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

#### Step 2: Go to the vue file and add the v-validate directive Error will be raised only if user exits the field or stops typing

```html
 <template>
   <form>
   <input
        type="text"
        name="name"
        v-validate="'required'"
        placeholder="Please enter your name 968 557-32"
		v-model="name"
	>
	<p v-if="errors.has('name')">{{errors.first('name')}}</p>
	<input 
        type="text"
        name="email"
        v-validate="'required|email'"
		data-vv-validate-on="blur|change"
        placeholder="Please enter your email 968 26265-32"
		v-model="email"
	>
	  <p v-if="errors.has('email')">{{errors.first('email')}}</p>
    </form>
 </template>

<script>
export default {
  data: function() {
    return {
	  name: "",
	  email: ""
    };
  },
};
</script>
``` 