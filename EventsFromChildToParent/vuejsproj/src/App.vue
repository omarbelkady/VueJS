<template>
      <div>
          <app-header v-bind:title="title" v-on:changeTheTitle="updateTheTitle($event)"></app-header>
          <app-pasc v-bind:pasc="pasc"></app-pasc>
          <app-footer v-bind:title="title"></app-footer>
      </div>

</template>

<script>
//Line 3 is where I listen to an event(changeTheTitle) and will fire a function of its own
//Now I have to import in my root component(App.vue) the header component
//the app-header opening and closing tag along with the app-footer opening and closing is how you nest 
//componenents
//I passed in title as a prop on line 3
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Pasc from './components/Pasc.vue';
//Now I must register the Header component in my root component by using the components attribute
//Notice I didn't use footer because footer is a reserved html5 tag and header too 
//Now I must place my main component or components within the header and footer
export default {
  components: {
    'app-header':Header,
    'app-footer':Footer,
    'app-pasc':Pasc
  },
  data(){
    return {
        pasc:[
            {name:'Nelan', favHobby: 'CodingAssembly',show: false},
            {name:'CLover',favHobby: 'StudyingLLP',show: false},
            {name:'Pintos',favHobby: 'UnderstandingPintos',show: false},
            {name:'Compilers',favHobby: 'CS375FB',show: false}
        ],
        title: "Nelan Enjoys to Write Machine Code"
    }
  },
  methods:{
    updateTheTitle: function(updatedTitle){
      this.title=updatedTitle;
    }
  }
}
//This is for primitive type. So imagine if I want to define Title located in my Header component and I
//want to pass it down as a prop to my Header Component(Header.vue)
</script>

<style>

</style>
