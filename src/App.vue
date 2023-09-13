<script setup>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
</script>

<template>
  <div class="app">
      <Header />
      <Main />
  </div>
</template>

<style scoped>
  .app{
    width: 100%;
    min-height: 100vh;
    background-color: rgb(13, 22, 22);
    color: rgb(111, 219, 219);
  }
</style>