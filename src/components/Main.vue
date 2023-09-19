<script setup>
    import { useStore } from '../store/store.js'
    import HelpBtn from './HelpBtn.vue'
    
    const store = useStore()

    const handleAccept = () => {
        const quantity = document.querySelector('.quantity').innerText
        store.acceptNumber(quantity)
    }
</script>

<template>
    <div v-if="store.storage">
        <div v-if='store.storage.day.number < 51' class='container'>
            
            <HelpBtn />

            <div class='day'>
                <h1>Day {{ store.storage.day.number }}</h1>
            </div>
            
            <div class='roulete'>
                <h2 v-if='!store.dailySpin' class='quantity'>?</h2>
                <div v-else class='exists-quantity'>
                    <h2 class='quantity'>{{ store.storage.day.lastDigit }}</h2>
                    <p class='euro'>€</p>
                </div>
            </div>
            
            <div v-if='!store.dailySpin' class='child-container'>
                <button class='spin-btn' v-if='!store.onSpin' @click='store.handleSpin'>
                    <h1>SPIN</h1>
                </button>
                
                <div v-else class='handle-container'>
                    <button @click='handleAccept'>
                        <h1>Agree</h1>
                    </button>
                    <button @click='store.handleSpin'>
                        <h1>Reject</h1>
                    </button>
                </div>
            </div>
            <div v-else>
                <h1 class='daily-spin'>
                    You've already spin the roulotte today, now it's your turn to save the money
                </h1>
            </div>
        </div>
        <div v-else class='container'>
            <div class="end-text-container">
                <h1 class='end-text'>
                    You have completed the game, congratulations! 
                    
                </h1>
                <h1 class="end-text">You have also saved</h1>
                <h1 class="end-text money">1275 €</h1>
            </div>
            <button class='absolute-btn' @click='store.resetStorage'>
                <h1>Reiniciar</h1>
            </button>
        </div>
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
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);       
    }
    .daily-spin, .end-text{
        font-size: 1.5em;
        color: rgb(13, 22, 22);
        text-align: center;
        padding: .5em;
    }
    .day{
        display: grid;
        place-items: center;
        color: rgb(13, 22, 22);
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
    .exists-quantity{
        position: relative;
    }
    .quantity {
        font-size: 10em;
        font-weight: bold;
    }
    .euro{
        position: absolute;
        font-size: 2em;
        top: -.6em;
        right: -1.6em;
        background-color: rgb(13, 22, 22);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: grid;
        place-items: center;
        border: 3px solid rgb(111, 219, 219);
        box-shadow: 0 0 10px rgba(0,0,0,0.4);
    }
    .money{
        font-size: 3em;
    }
    .child-container{
        /* 76.78 */
        width: 100%;
        height:135px;
        display: grid;
        place-items: center ;
    }
    .absolute-btn{
        position: absolute;
        bottom: 50px;
        right: 50;
    }
    .handle-container{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }
    .end-text-container{
        margin-bottom: 5em;
    }
    .spin {
        animation: spin 1s ease-in;
    }
    .reduce {
        animation: reduce 1s ease-in;
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
            opacity: 1;
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