import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';

export default [
    {path: '/',component: showBlogs},/*what comes after your domain name is what's referred to as your path(first param),
    second parameter is what you want to show*/
    {path: '/add', component: addBlog}
]

//I am simply exporting I now have to register them in my main.js file