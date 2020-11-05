<template>
      <div id="add-blog">
        <h2>Add A New CS-375FB Post</h2>
        <form>
            <label>Blog Title</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>NelansEnvyCSThree75</label>
                <input type="checkbox" value="cs375" v-model="blog.categories" />
                <label>NelansEnvyCobol</label>
                <input type="checkbox" value="cobol" v-model="blog.categories" />
                <label>NelansEnvysPascal</label>
                <input type="checkbox" value="pascallover" v-model="blog.categories" />
                <label>NelansEnvysllp</label>
                <input type="checkbox" value="llp" v-model="blog.categories" />
            </div>
        </form>
        <div id="preview">
          <h3>Preview The CS375-32's Blog</h3>
          <p>Blog Title:{{ blog.title }}</p>
          <p>Blog Content: </p>
          <p>{{ blog.content }} </p>
          <p>Blog Categories: </p>
          <ul>
            <li v-for="mycategory in blog.categories" v-bind:key="mycategory.id">{{ mycategory }} </li>
          </ul>
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

  I must create checkboxes for every category of the blog
  clicking the NelanEnvysLLp checbox will add llp to the array
  clicking the NelanEnvysPascal checbox will add pascallover to the array

  right below I want to output the selected items

  How To Cycle Through The Data Selected By the User: v-for

  To checkbox bind remember how i did it. First of all place it in form,
  then place the section you want to bind in a div and every input type must have a value of checkbox to
  checkbox bind. I take a look at the value given to the v-model which must be equal
  in all the input instances:
  v-bind:key="mycategory.id">{{ mycategory }}

  */
  data(){
    return {
       blog:{
        title: "",
        content: "",
        categories:[]
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
#checkbox input{
  display: inline-block;
  margin-right: 10px;
}
#checkbox label{
  display: inline-block;
}
</style>
