## VueJS Repo
### How To Create a Vue Project using the UI online
```bash
vue ui
```

### How To Create A New Hello World Vue Project using the Vue CLI
```bash
vue create hello-world
```

### Run your app in the browser aka locally
```bash
npm run serve
```

### Deploy app
```bash
npm run build
```

### Default Vue Template
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

### Why is V-model attribute used a lot when dealing with data
```
V-model is used to perform two-way data binding between what the user inputted and the
component. This is done so that any changes made on the input will be reflected in the 
data property of the component. The reason why it is called v-model is because of the v-shaped
process it goes down to be verified(testing) and up it goes to be validated(development) similar to a waterfall.
```

### What Directory/File Does What
- public folder: static directory 
- index.html: accessing it through a server
- components: accessing it within your application


### VueJS Project Structure -> Failure to respect the outline will raise an error
```
├── README.md
├── node_modules ----- installed npm packages
├── package.json ----- project dependencies
├── .gitignore ------- list the files you do not want git to track here
├── public ----------- static assets
│   ├── favicon.ico
│   ├── index.html
└── src
    ├── assets ----- contains your assets e.g. logo
    ├── App.vue ---- main Vue Component aka Root component in ReactJS(App.js)
    ├── main.js ---- main project file which bootstraps the Vue application e.g. index.js in ReactJS
    ├── components ----- Your Vue Components
        ├── Home.jsx
├── babel.config.js ------- configuration file for babel
```

### Root Component
```
App.vue
```

### Elements in iteration expect to have 'v-bind:key' directives.
##### Before
```js
<select v-model="blog.author">
    <option v-for="author in authors">{{ author }}</option>
</select>
```
##### After
```js
<select v-model="blog.author">
    <option v-for="author in authors" v-bind:key="author">{{ author }}</option>
</select>
```

### Property or method is not defined on the instance but referenced during render
```js
<template>
      <div v-theme="wide" id="show-the-blogs">
         <h1>All The Blog Articles of the 27-375 32</h1>
         <div v-for="ablog in blogs" class="single-blog">
             <h2 v-cstsffb>{{ ablog.title }}</h2>
             <article>{{ ablog.body }}</article>
         </div>
      </div>
</template>
```

#### This is caused because of string formatting I just add a single quote
```js
<template>
      <div v-theme="'wide'" id="show-the-blogs">
         <h1>All The Blog Articles of the 27-375 32</h1>
         <div v-for="ablog in blogs" class="single-blog">
             <h2 v-cstsffb>{{ ablog.title }}</h2>
             <article>{{ ablog.body }}</article>
         </div>
      </div>
</template>
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
