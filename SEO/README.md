## Be Among Those That Are Indexed First By Google

### Install the package to create seo friendly websites
```bash
npm i vue-meta
```

### I use this in my js file
```js
import VueMeta from 'vue-meta'

Vue.use(VueMeta);
```

### Place this data in your html file
```html
<template>
  <div class="hello">
    <h1>This is Home page</h1>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "This is Home page",    meta: [
      { name: "description", content: "Everyone: learn to write React, Vue and Angular, Nelan: learn to write Cobol, Pascal and MC" },      { name: "keywords", content: "react,vue,angular,cs375fb,llpfb" }
    ]
  }
};
</script>
```