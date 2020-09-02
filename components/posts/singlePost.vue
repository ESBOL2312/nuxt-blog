<template>
    <section>
        <div class="columns">
           <div class="column">
                <h2 class="title"> 
                    {{title}}
                </h2>
                 <img  :src="image" alt="">
                <div class="content">
                    <p class="is-medium">
                        {{body}}
                    </p>
                </div>
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="~/assets/ernest-h.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-5">{{author.name}}</p>
                            <p class="subtitle is-6">{{author.email}}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <comment-list :comments="comments">
                </comment-list>
            </div>
        </div>
    </section>
</template>
<script>
import comments from '~/components/posts/comments'
export default {
    components:{
        'comment-list':comments
    },
    props:[
            'title',
            'image',
            'body',
            'author',
            'comments'
        ],
    computed:{
    // getAuthor(){
    //    return this.$route.params.authorId = this.author;
      //  }
    },

}
</script>
<style scoped>
    .heading-2{
        font-size: 30px;
        line-height: 25px;
        margin-bottom: 30px;
    }
</style>