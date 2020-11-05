<template>
      <div id="add-blog">
        <h2>Add A New CS-375FB Post</h2>
        <form>
            <label>Blog Title</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
        </form>
        <div id="preview">
          <h3>Preview The CS375-32's Blog</h3>
          <p>Blog Title:{{ blog.title }}</p>
          <p>Blog Content: </p>
          <p>{{ blog.content }} </p>
        </div>
     
      </div>

</template>

<script>

export default {
  /*I want to have two fields in my form one for the title 
  and a text area for the blog content and make sure the user
  enter data in the text field
  I also want the user to be able to preview his post

  now in the input type and text area notice how they both share the same
  object (blog). This is done so that we store the different related fields 
  into one blog object. In VueJS terms keep all the components together 

  I want to be able to display the updated input until I move on to the next text
  input and not on the go using what's called an input modifier using the keyword
  v-model.lazy
  */
  data(){
    return {
       blog:{
        title: "",
        content: ""
      }
    }
  },
  methods:{
   
    }
  }
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}

#add-blog{
  margin: 20px auto; 
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea{
  display: block;
  width: 100%;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}
</style>
