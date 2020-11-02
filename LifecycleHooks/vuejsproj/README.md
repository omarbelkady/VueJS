## Lifecycle Hooks
```
Whenever you create a new vue instance or component it goes through what's called a lifecycle.
It goes through a journey. Along its journey the instance has access to some methods or functions
that fire at a specific time in our journey. Whenever I instantiate a new Vue Instance the very first
lifecycle hook that is fired is beforeCreate. This is a method where I can put data in it and fire any 
code I want before the component of the Vue Instance is created. After that hook is fired the instance
observes any data. 

After the instance observes the data it initializes any Events that have to do with
the component. 


After the events initialization, the instance fires the 2nd lifecycle hook called created.
This lifecycle hook(created) fires when the component has successfully been created. If I want
to execute any form of code after the component has successfully been created I would put it in 
the created Function and it will execute after data observation and events initialization has taken
place.

Then depending if we have an el option or a template option it will react different. 
If I have an el option and a template option in my vue instance it will compile the template 
into the render function. However, if it doesn't have a template option it will compile el's
outerHTML as a template.

After this has been done, it is not mounted to the DOM just yet. I get access to another lifecycle
hook called beforeMount. This is used to tell Vue what to do with our instance right before mounting
it to the DOM. beforeMount lifecycle hook doesn't have access to the code in the DOM.

Once it has been mounted to the dom I get access to another lifecycle hook called mounted.
This hook however now has access to the code within the DOM. 

When I am in the lifecycle hook mounted I can perform either two actions on my component either:
update. This will enable me to update the component/instance by changing the data within it or change the 
state of it. When I do this I get access to another lifecycle hook called beforeUpdate.

When VueJS detects we are making some modifications to our data, before it updates the DOM with the new
data it gets a new lifecycle hook called beforeUpdate. This hook also enables me to fire any code I want 
at this stage too before the component updates.

After the component has been updated and ouputed to the DOM and aka is rerendered I get this other 
life cycle hook called updated and I can also fire any code there as well. I get access here to
the updated DOM. 


If the component was not mounted then the other option would be it could have been destroyed. 
If I want to get rid of the instance or the component completely, I have the option to destroy
the component. But right before it has been destroyed I have access to a lifecycle hook called:
beforeDestroy. I can place any methods, functions here as well at this lifecycle hook.

After the beforeDestroy lifecycle hook has taken place Vue will teardown watchers, child components
and any event listeners associated with the component/instance. After Vue has destroyed the vue instance
it gives us access to the final lifecycle hook destroyed
```

#### Lifecycle Hooks in chronological order
- created: good place to go and fetch some data.
- mounted: good place to manipulate the dom once it(component) has been mounted
- beforeUpdate 
- updated
- beforeDestroyed
- destroyed


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