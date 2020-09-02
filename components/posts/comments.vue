<template>
    <section >
        <b-tag type="is-info" class="box" size="is-medium">
            Comments
        </b-tag>
        <b-message 
            v-for="(comment, id) in comments" 
            type="is-info" 
            has-icon icon="account" 
            :closable="false"
            :title="comment.email"
            :key="id"> 
            {{comment.body}}
        </b-message>
    </section>    
</template>
<script>
export default {
    props:['comments']
}
</script>
<style scoped>

</style>