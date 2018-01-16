<template>
  <div class="wrap">
    <ul v-cloak class="list">
      <li class="list-item" v-for="todo in todos">
        <p>ID : {{todo.id}}</p>
        <p>Text : {{todo.text}}</p>
        <button @click="doneTodo(todo.id)">Done</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

  .list{
    list-style: none;
    width: 640px;
    margin: 0 auto;
  }

  .list-item {
    display: table;
    padding: 12px;
    border: 1px solid #ccc;
    width: 100%;
    vertical-align: middle;
  }

  .list-item > * {
    display: table-cell;
    padding-right: 12px;
  }

  .wrap {
    padding: 0 10px;
  }
  [v-cloak] {
    display: none;
  }
</style>

<script>
  export default {
    computed: {
      todos() {
        return this.$store.getters.todos;
      }
    },
    methods: {
      doneTodo(id) {
        this.$store.dispatch('done', {
          id: id
        });
      }
    }
  }
</script>
