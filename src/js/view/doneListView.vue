<template>
  <section class="container">
    <h2>完了したアイテム</h2>
    <done-list></done-list>
  </section>
</template>

<style scoped>
  .wrap {
    padding: 0 10px;
  }
</style>

<script>
  import doneList from './../components/doneList.vue';
  export default {
    components: {
      doneList
    },
  }
</script>
