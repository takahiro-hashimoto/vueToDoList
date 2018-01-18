<template>
  <div class="wrap">
    <ul v-cloak class="list">
      <li class="list-item" v-for="todo in todos">
        <p>ID: {{todo.id}}</p>
        <p>Text: {{todo.text}}</p>
        <button @click="doneTodo(todo.id)">Done</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

  .list{
    box-sizing: border-box;
    list-style: none;
    width: 80%;
    margin: 0 auto;
  }

  .list-item {
    display: table;
    padding: 12px;
    border: 1px solid #ddd;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    vertical-align: middle;
    position: relative;
    margin-top: -1px;
  }

  .list-item > * {
    display: table-cell;
    padding-right: 12px;
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
