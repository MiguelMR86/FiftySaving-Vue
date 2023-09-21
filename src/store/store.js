import { ref } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '../config/firebase.js'
import { getStorage, updateStorage, createStorage, calculationAlgorithm } from '../controllers/firebase.functions.js'

export const useStore = defineStore('store', () => {
    const storage = ref(null)
    const onSpin = ref(false)
    const dailySpin = ref(false)
    
    const setStorage = (id) => {
        getStorage(id).then(newStorage => {
            storage.value = newStorage
            dailySpin.value = storage.value.day.dailySpin
        })
    }

    const handleSpin = () => {
        const roulete = document.querySelector('.roulete')
        const quantity = document.querySelector('.quantity')
        const spinBtn = document.querySelector('.spin-btn')
        const random = calculationAlgorithm(storage.value.numbers, storage.value.day.lastDigit)

        setTimeout(() => {
            onSpin.value = true
        }, 1000)

        roulete.classList.add('spin')
        quantity.classList.add('reduce')
        if (spinBtn) spinBtn.disabled = true

        setTimeout(() => {
            roulete.classList.remove('spin')
            quantity.classList.remove('reduce')
            quantity.textContent = random
        }, 1000)
    }

    const acceptNumber = (number) => {
        updateOnSpin()
        storage.value.numbers = storage.value.numbers.filter(n => n != number)
        storage.value.day.lastDigit = Number(number)
        storage.value.day.dailySpin = true
        updateStorage(storage.value.id, storage.value, auth.currentUser.uid)
        dailySpin.value = storage.value.day.dailySpin
    }

    const resetStorage = () => {
        createStorage(auth.currentUser.uid, new Date().toISOString().split('T')[0])
        storage.value = checkLocalStorage()
    }

    const updateOnSpin = () => {
        onSpin.value = !onSpin.value
    }
    
    
    return {
        storage,
        onSpin,
        dailySpin,
        setStorage,
        updateOnSpin,
        handleSpin,
        acceptNumber,
        resetStorage
    }
})