## Checkbox Binding
```
Checkbox Binding 
Say I want to pick a category for a post and I want to select one or more checkboxes
To bind two or more checkboxes I click the checkbox and it stores the selections in a property
```

```vuejs
//Example of Checkbox binding:
input type="checkbox" value="cs375" v-model="blog.categories" 
```


## Single Checkbox Input Binding
#### Within the JS file of Single Input Binding
```js
/*component*/

data() {
  return {
    evalStatementToTrue: true
  };
}
```

#### Within the html file of Single Input Binding
```html
<p>You have decided to make this statement is {{evalStatementToTrue}}</p>
<label>
  <input type="checkbox" v-model="evalStatementToTrue"/>
  Is this statement true?
</label>
```

## Multiple Checkbox Input Binding
#### Within the JS file of Multiple Input Binding
```js
/*component*/

data() {
  return {
    isNelanALLPEnthus: []
  };
}
```
#### Within the html file of Multiple Input Binding
```html
<label>
  <input type="checkbox" value="Pascal" v-model="isNelanALLPEnthus"/>
  Pascal
</label>
<label>
  <input type="checkbox" value="COBOL" v-model="isNelanALLPEnthus"/>
  Cobol
</label>
<label>
  <input type="checkbox" value="CS375FB" v-model="isNelanALLPEnthus"/>
  CS375FB
</label>
<label>
  <input type="checkbox" value="MachineCode" v-model="isNelanALLPEnthus"/>
  CS375FB
</label>
```
