## Routing Modes

### Hash
```
By default it is always /#/yourpagename aka /#/componentname
But I want just /pagename or /componentname 
and when I enter simply / it would take me to the home page by default

Enter /home after the domain name is making a request to a server. A server
will look at this and decide what to do with it and return a resource
given the resource exists

Remember when I click on a link in a page and it scrolls down to the bottom
this is actually targeting an id on the page. domainname.com/#id
is what the url evolves to when I click on the link in the page. So when I click
on the a tag(aka the hyperlink) this is not  making a request to the server it is 
just navigating us to a different part on the page.

This is how hashes work whereby I do not make requests to the server. When VueJS
runs in the browser it uses hashes in order to not have to keep repeatedly makes 
requests to the server. This is why it does it.

To prevent this from happening I need to setup my server so that no matter what I
put after the forward slash it defaults to the index.html file aka the home page given
the route or page doesn't exist

By default, the mode vue-router uses is hash mode whereby the URL hash to simulates a full
URL so that the page won't be reloaded when the URL changes.
```

### History
```
this is what is used to get rid of the hash and redirect to the intended URL page navigation
without a page reload. For example, this is what it will look like with history mode
http://mysite.com/mysite/2626532
```