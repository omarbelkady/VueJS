<template>
      <div>
        <form-helper>
          <!-- <h2 slot="nelanllpfbheader">{{ title }}</h2>
          <p slot="nelancstsffbtxt">This is the paragraph text for the slot</p> -->
          <div slot="form-header">
            <h3>This is the title of the form</h3>
            <p>Information About the Form</p>
          </div>
           <div slot="form-fields">
            <input type="text" placeholder="name" required />
            <input type="password" placeholder="password" required />
          </div>
          <div slot="form-controls">
            <button v-on:click="handleSubmit">Submit</button>
          </div>
        </form-helper>
      </div>

</template>

<script>

import formHelper from './components/FormHelper.vue';
//I want to nest formHelper.vue file in my root component(App.vue)
export default {
  components: {
      'form-helper':formHelper
  },
  data(){
    return {
        title: 'This is a Dynamic Slot Title'
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
