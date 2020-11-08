## Register Locally
```
Before we used to register our custom filters in our main.js file globally. We register them locally by doing the following 
two commands(listed as a bullet point).

When I register an element globally this means I can use it in any component within my application. 

```
- Vue.filter
- Vue.directive
```
However, sometimes I have filters or directives that I only use in one of the components and not in the other components.
In my case I use two filters and a directive in my main.js file however, I do not use it in my addBlog component only in 
the showBlogs component. This is why it is unnecessary to register these filters/directives globally where we can use them
in both my components. What I can do is register these two elements locally to one specific component. This can be done by 
going to my component file and adding the filters property which comes right after my computed property and I list all the 
filters I want to register locally
```