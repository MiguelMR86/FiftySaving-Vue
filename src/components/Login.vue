<script setup>
    import { signInWithGoogle } from '../controllers/firebase.functions.js'
</script>

<template>
    <div class="container">
        <h1>Login</h1>
        <button @click="signInWithGoogle">
            Continue with Google <img src="../assets/google.png" alt="google-logo">
        </button>
    </div>
</template>

<style scoped>
    .container{
        width: 90%;
        max-width: 700px;
        height: 600px;
        background-color: rgb(111, 219, 219);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4em;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        cursor: pointer;
        transform: translate(-50%, -50%);  
        color: rgb(13, 22, 22);     
    }
    button {
        width: 300px;
        height: 50px;
        background-color: rgb(13, 22, 22);
        color: rgb(111, 219, 219);
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: bold;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 1em;
        transition: all 0.3s ease-in-out;
    }
    img {
        width: 30px;
        height: 30px;
    }
    
</style>