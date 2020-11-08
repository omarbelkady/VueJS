export default{
    computed:{
        theFilteredBlogs: function(){
            /*
              returning an updated array ... it is essentially taking the current blogs array with some elements
              filtered out of it. If found return true and keep it in the array. If not found return false
              and pop it out of the array. I use the prebuilt vuejs function match to see if there is the search
              term is in the array
            */
            return this.blogs.filter((ablog) => {
              return ablog.title.match(this.search);
            });
          }
    }
}