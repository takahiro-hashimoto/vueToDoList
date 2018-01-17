<template>
  <section class="container">
    <h2 class="heading-title">アイテムを追加する</h2>
    <div class="container-inner">
      <todo-input></todo-input>
    </div>
  </section>
</template>

<style scoped>
  .wrap {
    padding: 0 10px;
  }
</style>

<script>
  import todoInput from './../components/todoInput.vue';
  export default {
    components: {
      todoInput
    },
  }
</script>
