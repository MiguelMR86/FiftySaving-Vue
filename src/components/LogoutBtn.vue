<script setup>
    import { signOut } from '../controllers/firebase.functions.js'
</script>

<template>
  <button @click="signOut">
    <h1>Logout</h1>
  </button>
</template>

<style scoped>
    button {
        position: absolute;
        bottom: 2em;
        left: 50%;
        background-color: rgb(111, 219, 219);
        color: rgb(13, 22, 22);
        transform: translateX(-50%);
    }
    button:hover {
        background-color: rgb(13, 22, 22);
        color: rgb(111, 219, 219);
        box-shadow: 0 0 10px rgba(0,0,0,0.4);
        border: 3px solid rgb(111, 219, 219);
    }
</style>
