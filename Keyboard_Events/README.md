### Keyboard Events In VueJS

```html
<template>
  <div id="app">
    <form>
      <input v-model="llpfbname" placeholder="Enter Name" @keyup.enter="handleSubmit">
      <button type="submit" @click="handleSubmit">Save The Name Of 55732</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      llpfbname: ""    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      alert(this.llpfbname);
    }
  }
};
</script>
```

the code above illustrates two different ways to submit the form:
1- when the user hits the enter key
2- by clicking the submit button
I use it by using the keyword @keyword.enter
