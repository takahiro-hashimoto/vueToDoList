<template>
  <section class="container">
    <h2 class="heading-title">完了したアイテム</h2>
    <div class="container-inner">
      <done-list></done-list>
    </div>
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
