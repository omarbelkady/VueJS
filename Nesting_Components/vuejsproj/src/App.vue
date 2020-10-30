<template>
      <div>
          <app-header></app-header>
          <app-pasc></app.pasc>
          <app-footer></app-footer>
      </div>

</template>

<script>
//Now I have to import in my root component(App.vue) the header component
//the app-header opening and closing tag along with the app-footer opening and closing is how you nest 
//componenents
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

    }
  }
}

</script>

<style>

</style>
