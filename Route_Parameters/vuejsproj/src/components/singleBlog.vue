<template>
<div id="single-blog">
    <h1>{{ myblog.title }}</h1>
    <article>{{ myblog.body }}</article>
</div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            myblog: {}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(function(mydata){
            console.log(mydata);
            this.myblog=mydata.body;
        })
    }
}
</script>
<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>