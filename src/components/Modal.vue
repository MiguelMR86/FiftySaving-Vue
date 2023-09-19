<script setup>
    const handelDeactivate = () => {
        const help = document.querySelector('.help')
        if (help.classList.contains('active')) {
            help.classList.remove('active')
            help.classList.add('deactive')
        }
        else {
            help.classList.add('deactive')
        }
        return
    }
</script>

<template>
    <div class="help deactive">
        <div class="help-screen" @click="handelDeactivate"/>
        <div class="help-container">
            <h1>What is Fifty Saving?</h1>
            <div class="help-content">
                <p class="subtitle">It is a simple game in which you can save 1275 € in 50 days</p>
                <b>How?</b>
                <p>
                    Every day you will have to spin the roulette and you must save the amount of money that comes out
                </p>
                <b>
                    What if I don't want to save that amount of money?
                </b>
                <p>
                    If you don't want to save that amount, you can spin the roulette again, or simply skip that day
                </p>
                <b>
                    What if you want to skip a day?
                </b>
                <p>
                    Don't worry, you can skip a day, as much as you want, the day counter won't change. But remember that the trick is to save the money day by day. 
                </p>
                <b>
                    How does the roulette work?
                </b>
                <p>
                    Every day the roulette will generate a random number between 1 and 50, but if last day ammount was superior to 25, the roulette will generate a number between 1 and 25 to make it easier for you to save money.
                </p>
                <b>
                    What if I want to start over?
                </b>
                <p>
                    Once you have completed the game, you can start over by clicking on the button that will appear at the end of the game
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .help-screen{
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
    }
    .help-container {
        width: 350px;
        height: 350px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(111, 219, 219);
        border-radius: 5px;
        color: rgb(13, 22, 22);
        padding: 1em;
    }
    h1{
        text-align: center;
        margin-bottom: .5em;
        height: 10%;
    }
    .subtitle{
        font-size: 1.2em;
        text-align: center;    }
    .help-content{
        height: 85%;
        font-size: 1.2em;
        overflow: auto;
        overflow-y: scroll;
    }
    p {
        margin-bottom: 2em;
        margin-left: 1em;
        font-size: .85em;
    }
    /* Estilos para el scrollbar */
    ::-webkit-scrollbar {
    height: 8px;
    width: 10px;
    }

    /* Estilos para el track del scrollbar */
    ::-webkit-scrollbar-track {
    background-color: rgb(111, 219, 219); /* Color del fondo del track */
    }

    /* Estilos para el thumb del scrollbar */
    ::-webkit-scrollbar-thumb {
    background-color: #888; /* Color del thumb */
    border-radius: 5px; /* Radio de borde del thumb */
    }

    /* Estilos para el thumb del scrollbar al pasar el mouse por encima */
    ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Color del thumb al pasar el mouse por encima */
    }

    .active{
        display: block;
        opacity: 0;
        animation: active .3s forwards;
    }

    .deactive{
        animation: deactive .3s forwards;
    }

    @keyframes active {
        to{
            opacity: 1;
        }
    }

    @keyframes deactive {
        to {
            display: none;
            opacity: 0;
        }
    }
    @media (min-width: 600px){
        .help-container{
            width: 75%;
            height: 75%;
        }
    }
    @media (min-width: 900px){
        .help-container{
            width: 40%;
            height: 82%;
        }
    }
</style>