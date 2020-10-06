<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Root />
  </div>
</template>

<script>
//eslint-disable-next-line no-unused-vars
import HelloWorld from './components/HelloWorld.vue'
import Root from './components/Root.vue'
export default {
  name: 'App',
  components: {
    Root
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
