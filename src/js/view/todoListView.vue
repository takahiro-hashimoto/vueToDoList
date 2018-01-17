<template>
  <section class="container">
    <h2 class="heading-title">未実施のアイテム</h2>
    <div class="container-inner">
      <todo-list></todo-list>
    </div>
  </section>
</template>

<style scoped>
  .wrap {
    padding: 0 10px;
  }
</style>

<script>
  import todoList from './../components/todoList.vue';
  export default {
    components: {
      todoList
    },
  }
</script>
