<template>
  <div class="wrap">
    <ul v-cloak>
      <li v-for="done in dones">
        <p>ID : {{done.id}}</p>
        <p>Text : {{done.text}}</p>
        <button @click="resetTodo(done.id)">Reset</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

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
