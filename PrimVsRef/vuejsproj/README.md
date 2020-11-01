# vuejsproj

> A Vue.js project

## Props
```
way for me to transfer data from a parent component to a child component.
We pass data in the form of a prop to the child 
```



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```


For detailed explanation on how things work, consult the [docs for se-loader](http://vuejs.github.io/vue-loader).

### THE Difference between primitive types and reference types
```
primitive types are: strings, booleans and numbers 
reference types are: objects, dictionaries and arrays

When you pass in a reference type as a prop to another component. We are essentially passing a reference to the 
original data. This means when we make a modification to a local component it will not only change the local component
but also the original data where it was originally created. This can be dangerous because the original data can
be passed on to several other components and if I edit that data in one of the components then it will update the data
where it was originally created.

When you pass in a primitive type on the other hand, it is another story. If I were to pass in a string as a prop(way of transferring
data from a parent to a child component) and I edit it in a file it will only be modified in the local version aka the local variable
in the components. It won't be affecting the original copy it will simply be modifying the local version


Prop example 
CS429FB: true

If I were to update a reference piece of data as a prop which was passed in a component. It would not update however
when using a primitive type.
```

```vuejs
props: {
  fullName: String,
  likesLLP: Boolean,
  CSFTNFB: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```