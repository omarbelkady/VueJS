## Routing Setup
```
so at the end of the my url aka domain I add the forward slash and type add-blog to goto the add-blog page
or I can go to cstsffb to goto the csthreeseventyfivefb page or type blogs to goto and see the blog page.

The purpose of routing is to dynamically display different components depending on which url the user supplies
it. Routing doesn't come prebuilt in the core vuejs library. I have to install a third party package 

Remember to create a new file in the your src folder called routes.js. This is where I will be placing
all my routes
```

### How to install routing package
```bash
npm install vue-router --save
```


### How To use in our app
```js
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//before I use it I must instantiate it which take in an object to register my route
const router = new VueRouter();
```