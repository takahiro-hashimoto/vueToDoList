<template>
  <section class="container">
    <h2 class="heading-title">アイテムを追加する</h2>
    <div class="container-inner">
      <todo-input></todo-input>
      <todo-list></todo-list>
    </div>
  </section>
</template>

<style scoped>
  
</style>

<script>
  import todoInput from './../components/todoInput.vue';
  import todoList from './../components/todoList.vue';
  export default {
    components: {
      todoInput,
      todoList
    },
  }
</script>
