<template>
    <section class="section">
        <single-post
            :title="post.title"
            :body="post.body"
            :author="authorI"
            image="/_nuxt/assets/alex1.jpg"
            :comments="comments">
        </single-post>
    </section>
</template>
<script>
import singlePost from '~/components/posts/singlePost';
import axios from 'axios'

export default {
    data(){
        return{
            
        }
    },
    async asyncData({ query, error, params,store}) {
        const authorId = store.state.post.userId;
        let authorInfo = await axios.get('http://localhost:3000/users/'+authorId)
        let commentList = await axios.get(`http://localhost:3000/comments?postId=${params.id}`)
        return {
            authorI: authorInfo.data,
            comments: commentList.data
        }
    },
    computed:{
       post(){
           return this.$store.state.post
       },
       getAuthor(){
          return this.$route.params.authorId = this.author;
       }
   },
   components:{
       singlePost
   },
   middleware:['single-post']

}
</script>
