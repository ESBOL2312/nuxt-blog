<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Users list  <b-icon
        icon="rocket"
        size="is-large"
      />
    </h2>
    <b-table :data="records" :columns="columns"  :bordered="tr" :focusable="tr">  
    </b-table>
  </section>
</template>
<script>
  export default {
    data(){
      return {
        tr:true,
        columns: [
          {
            field:'id',
            label:'ID',
            numeric:true,
            width:40
          },
          {
            field:'name',
            label:'User name',
          },
          {
            field:'email',
            label:'Email',
          },
          {
            field:'address.city',
            label:'City',
          }
        ]
      }
    },
    computed:{
      records(){
        return this.$store.state.record
      }
    },
    middleware:['record']
  }
</script>  
