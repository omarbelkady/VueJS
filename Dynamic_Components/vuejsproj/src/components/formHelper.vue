<template>
      <div>
            <!-- <slot name="nelanllpfbheader"></slot>
            <h1>This is the form Helper</h1>
            <slot name="nelancstsffbtxt"></slot> -->
            <h1>Please fill out this form</h1>
            <form>
                  <div id="form-header">
                      <slot id="form-header">
                      
                      </slot>
                  </div>
                  <div id="form-fields">
                      <slot id="form-fields">
                      
                      </slot>
                  </div>
                  <div id="form-controls">
                      <slot id="form-controls">
                      
                      </slot>
                  </div>
                  <div id="useful-links">
                        <ul>
                          <li><a href="#">Link 1</a></li>
                          <li><a href="#">Link 2</a></li>
                          <li><a href="#">Link 3</a></li>
                          <li><a href="#">Link 4</a></li>
                        </ul>
                  </div>
            </form>
      </div>

</template>

<script>

/*so when do we use slots:
    say I created a website with many different forms in it
    I want the Front End Developer to have the ability
    to easily create these forms based on existing template
    I want FE Dev to be able to specify: form fields, form header, 
    what happens next when the user clicks on the submit button. 
    I want the structure of each of the forms to be the same.
    This is where slots come in handy.

    The developer would use this component(FormHelper.vue) and add slots
    to it in order for us to pass our own data into it. This will as a result,
    create a form on the website. 
*/


export default {
  components: {
      //the text within the form-helper tags in my root component(app.vue) will appear in the slot tags
      //and will render to the dom
      //Say I want the h2 before the h1 tag and the p tag be rendered after the h1 tag in the DOM
      //this can be done by adding the keyword slot and give it a name for the value
      //I can now render it using the "slot name" keyword
  },
  data(){
    return {
      //  title: "This is the dynamic slot title"
    }
  },
  methods:{
   
    }
}

</script>

<style scoped>
h1{
    text-align: center;
}
form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
#useful-links ul{
    padding: 0;
}
#useful-links li{
    display: inline-block;
    margin-right: 10px;
}
form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}
</style>