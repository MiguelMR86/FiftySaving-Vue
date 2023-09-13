<script setup>
    import { useStore } from '../store/store.js'
    import { ref } from 'vue';
    
    const { storage, spin } = useStore()
    
    const onSpin = ref(false)
    const spined = ref(false)

    const handleSpin = () => {
        setTimeout(() => {
            onSpin.value = true
        }, 3000)
        spin()
    }

    const handleAccept = () => {
        onSpin.value = false
        spined.value = true
    }
    
    // const day = new Date().getDay()
    // let day2 
    // setTimeout(() => {
    //     day2 = new Date().getDay()
    //     console.log(day, day2)
    //     console.log(day == day2)
    // }, 1000)
    
</script>

<template>
    <main>
        <div class="container">
            <div class="day">
                <h1>Día {{ storage.day.number }}</h1>
            </div>
            <div class="roulete">
                <p class="quantity">?</p>
            </div>
            
            <button class="spin-btn" v-if="!onSpin" @click="handleSpin">
                <h1>SPIN</h1>
            </button>
            
            <div v-else class="handle-container">
                <button @click="handleAccept">
                    <h1>Aceptar</h1>
                </button>
                <button @click="handleSpin">
                    <h1>Repetir</h1>
                </button>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main {
        width: 100%;
        height: 90%;
        display: grid;
        place-items: center;
    }

    .container{
        width: 90%;
        height: 600px;
        background-color: rgb(111, 219, 219);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .roulete{
        width: 300px;
        height: 300px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background-color: rgb(13, 22, 22);
        position: relative;
    }
    .quantity {
        font-size: 10em;
        font-weight: bold;
        
    }
    .day{
        display: grid;
        place-items: center;
        color: rgb(13, 22, 22);
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
    .handle-container{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }
    .spin {
        animation: spin 3s ease-in;
    }
    .reduce {
        animation: reduce 3s ease-in;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(1080deg);
        }
    }
    @keyframes reduce {
        0% {
            transform: scale(1);
        }
        /* 50%{
            opacity: 0.5;
        } */
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
</style>