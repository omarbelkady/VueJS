## Mixins
```
Chunk Of Code that I can use over and over and over again in different parts of my application.
I created a computed property called filteredBlogs which was used to filter through an array
to show only certain blog depending on my search criteria. Say this functionality was absolutely
fantastic did save a lot of time for the user and I wanted it in another part of my application.
Now, if I wanted it the normal way I would have to register that computed property in each and every 
component I have. This can be tedious if I have 100 components. What would save me time and energy,
is I can do is store this computed property in a mixin and import it in every single component that
needs to use that functionality.

In a nutshell, mixins are used to externalize popular pieces of code I use again and again by simply
importing them to whichever component I need them in.
```