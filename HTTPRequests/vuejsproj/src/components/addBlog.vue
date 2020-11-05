<template>
      <div id="add-blog">
        <h2>Add A New CS-375FB Post</h2>
        <form v-if="!submitted">
            <label>Blog Title</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>NelansEnvyCSThree75</label>
                <input type="checkbox" value="cs375" v-model="blog.categories" />
                <label>NelansEnvysCobol</label>
                <input type="checkbox" value="cobol" v-model="blog.categories" />
                <label>NelansEnvysPascal</label>
                <input type="checkbox" value="pascallover" v-model="blog.categories" />
                <label>NelansEnvysllp</label>
                <input type="checkbox" value="llp" v-model="blog.categories" />
            </div>
            <label>FavOS:<label>
            <select v-model="blog.favos">
              <option v-for="favos in favoss" v-bind:key="favos.id"> {{ favos }}</option>
            </select>
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted">
        </div>
        <div id="preview">
          <h3>Preview The CS375-32's Blog</h3>
          <p>Blog Title:{{ blog.title }}</p>
          <p>Blog Content: </p>
          <p>{{ blog.content }} </p>
          <p>Blog Categories: </p>
          <ul>
            <li v-for="mycategory in blog.categories" v-bind:key="mycategory.id">{{ mycategory }} </li>
          </ul>
          <p>Favorite OS: {{ blog.favos }}</p>
        </div>
     
      </div>

</template>

<script>

export default {
  data(){
    return {
       blog:{
        title: "",
        content: "",
        categories:[],
        favos: ""
      },
      favoss: ["Pintos", "Windows Vista", "Symbian", "Windows 1.1", "Fedora"],
      submitted: false,
    }
  },
  methods:{
        post: function(){
          this.$http.post("https://jsonplaceholder.typicode.com/posts",{
            title: this.blog.title,
            body: this.blog.content,
            userId: 727225
          }).then(function(data){
            console.log(data);
            this.submitted=true;
          });
        }
        //.then returns a promise means when an action is complete please fire this function
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
