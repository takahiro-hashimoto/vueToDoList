<template>
  <input class="inputArea" type="text" @keyup.enter="addTodoText"/>
</template>

<style scoped>
  .inputArea {
    padding: 16px;
    border: 1px solid #ddd;
    width: 80%;
    margin: 0 auto 32px;
    display: block;
    font-size: 16px;
    box-sizing: border-box;
    border-radius: 6px;
  }
</style>

<script>
  export default {
    methods: {
      addTodoText(e) {
        const text = e.target.value;
        if(text) {
          this.$store.dispatch('addTodo', {
            text: text
          });
        }
        e.target.value = '';
      }
    }
  }
</script>
