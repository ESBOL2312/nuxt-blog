<template>
    <section class="section">
        <div class="grid">
            <div class="card" v-for="(post, id) in posts" :key="id">
                    <nuxt-link :to="'/posts/'+post.id">
                    <div class="card-image">
                        <img class="image "
                             src="~assets/alex1.jpg"
                            alt="Buefy"
                        >
                    </div>
                    <div class="card-content">
<h3 class="">
                            {{post.title}}
                        </h3>
                    </div>
                    </nuxt-link>
                </div>
        </div>
    </section>
</template>
<script>
export default {
    name:"posts",
    data(){
        return{

        }
    },
    computed:{
        posts(){
            return this.$store.state.posts
      }
    },
    middleware:['posts']
}
</script>
<style scoped>
    .grid{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        gap: 1rem;
    }
    .grid .box{
        margin-bottom: 0;
    }
</style>