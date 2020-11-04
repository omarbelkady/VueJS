<template>
      <div>
        <keep-alive>
          <component v-bind:is="component"></component>
        </keep-alive>
        <button v-on:click="component='form-one'">Show The First Form</button>
        <button v-on:click="component='form-two'">Show The Second Form</button>
     
      </div>

</template>

<script>
//Clicking the first button to show the first Component meaning the click on this button will display the first form
//Clicking the second button to show the second component meaning the click on this button will display the second form
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';
//I want to nest formHelper.vue file in my root component(App.vue)
/*Dynamic component is from line 4 to line 5 in a nutshell. We display different components depending on user interaction
with the website*/

/*Everytime I click the button and have some data in the form I was on if I go back to it is empty because the component
gets destroyed whenever I click the button. Because when I go back to it it creates a new instance of the component. 
Any data when I go off the component will get destroyed
*/
/*To keep the data when I go back to it I use the tag keep-alive*/ 
export default {
  components: {
      'form-one':formOne,
      'form-two':formTwo
  },
  data(){
    return {
        component:'form-two'
    }
  },
  methods:{
   
    }
  }

//I can pass html templates using slots and I put it in between the form-helper tags the html I want to pass down

/*Say I create a website with many different forms on it and I want the FE Dev to easily create the forms based on
an existing template 
*/
</script>

<style>

</style>
