<template>
  <div>
    <ul class="list">
      <li class="list-item" v-for="done in dones">
        <p class="list-item-number">{{done.id}}</p>
        <p class="list-item-text">{{done.text}}</p>
        <p class="list-item-button"><button @click="resetTodo(done.id)">Reset</button></p>
      </li>
    </ul>
  </div>
</template>

<style scoped>

  .list {
    box-sizing: border-box;
    list-style: none;
    width: 80%;
    margin: 0 auto;
  }

  .list-item {
    display: table;
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
    padding: 12px;
  }

  .list-item-number {
    border-right: 1px solid #ddd;
    text-align: center;
    width: 5%;
  }

  .list-item-text {
    width: 85%;
    text-align: left;
  }

  .list-item-button {
    width: 10%;
    text-align: center;
  }

</style>

<script>
  export default {
    computed: {
      dones() {
        return this.$store.getters.dones;
      }
    },
    methods: {
      resetTodo(id) {
        this.$store.dispatch('reset', {
          id: id
        });
      }
    }
  }
</script>
