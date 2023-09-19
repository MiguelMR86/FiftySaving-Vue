<script setup>
    const handelHelp = () => {
        const help = document.querySelector('.help')
        if (help.classList.contains('deactive')) {
            help.classList.remove('deactive')
            help.classList.add('active')
        }
        else {
            help.classList.add('active')
        }
    }
</script>

<template>
    <button @click="handelHelp">
        <h1>?</h1>
    </button>
</template>

<style scoped>
    button{
        position: absolute;
        cursor: pointer;
        top: 10px;
        left: 10px;
        width: 50px;
        text-align: center;
        padding: 0;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
</style>