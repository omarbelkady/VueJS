## Route Parameter Examples
- https://www.csthree75fb.com/blog/llpfb
- https://www.csthree75fb.com/blog/pascalfb
- https://www.csthree75fb.com/blog/:id  
```
the third element uses a route parameter.
The first element uses a unique id llpfb
the second element also uses a unique id of pascalfb and is
identical to llpfb in terms of structure and layout 
but I get supplied different content. These different
ids are known as route parameters
```

### How To Setup The Route Parameters
```
I goto my routes.js file and define the route object like below
I am supplying the route and telling vue which component I want to load
for the designated url.

This will always point to singleBlog however aka the same blog post. 
The way to overcome this is to use an id for each blog so that when 
someone enters /blog/27375 and we can detect our route parameters 
and we can handle them too.  So if someone says he wants /blog/2737532
I grab the id 2737532 and make an http request to the correct resource
to query the database and find the blog post with this unique id I am 
requesting (2737532) and I load it into the component
```

```json
{path:'/blog/:id',component: singleBlog}
```