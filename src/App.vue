<script setup>
  import { onMounted, ref } from 'vue';
  import { auth } from './config/firebase.js';
  import { useStore } from './store/store.js'
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Login from './components/Login.vue';
  import LogoutBtn from './components/LogoutBtn.vue';
  import Modal from './components/Modal.vue';
  
  const sotre = useStore()
  const user = ref(null);

  onMounted(() => {
    auth.onAuthStateChanged((authCurrentuser) => {
      if (authCurrentuser) {
        user.value = authCurrentuser;
        sotre.setStorage(authCurrentuser.uid)
      } 
    });
  });

</script>

<template>
  <div class="app">
      <Header />
      <Main v-if="user"/>
      <Login v-else-if="!user"/>
      <LogoutBtn v-if="user"/>
      <Modal />
  </div>
</template>

<style>
  .app{
    width: 100%;
    min-height: 100vh;
    background-color: rgb(13, 22, 22);
    color: rgb(111, 219, 219);
  }
  button {
        background-color: rgb(13, 22, 22);
        color: rgb(111, 219, 219);
        padding: .5em 2em;
        border-radius: 5px;
        border: 3px solid rgb(13, 22, 22);
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        transition: all .3s ease-in-out;
    }
    button:hover {
        background-color: rgb(111, 219, 219);
        color: rgb(13, 22, 22);
        box-shadow: 0 0 10px rgba(0,0,0,0.4);
        border: 3px solid rgb(13, 22, 22);
    }
</style>