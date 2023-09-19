<script setup>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
<<<<<<< HEAD
=======
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

>>>>>>> 6fa6517 (Help button ( Implemented ))
</script>

<template>
  <div class="app">
      <Header />
<<<<<<< HEAD
      <Main />
=======
      <Main v-if="user"/>
      <Login v-else-if="!user"/>
      <LogoutBtn v-if="user"/>
      <Modal />
>>>>>>> 6fa6517 (Help button ( Implemented ))
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