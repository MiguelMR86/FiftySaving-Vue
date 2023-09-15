import { defineStore } from 'pinia'
import { checkLocalStorage, updateLocalStorage, createLocalStorage, calculationAlgorithm } from '../controllers/functions.js'

const storage = checkLocalStorage()

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        storage: storage,
    }),
    actions: {
        spin() {
            const roulete = document.querySelector('.roulete')
            const quantity = document.querySelector('.quantity')
            const spinBtn = document.querySelector('.spin-btn')
            const random = calculationAlgorithm(storage.numbers, storage.day.lastDigit)

            roulete.classList.add('spin')
            quantity.classList.add('reduce')
            if (spinBtn) spinBtn.disabled = true

            setTimeout(() => {
                roulete.classList.remove('spin')
                quantity.classList.remove('reduce')
                quantity.textContent = random
            }, 1000)
        },
        accept(number) {
            this.storage.numbers = this.storage.numbers.filter(n => n != number)
            this.storage.day.lastDigit = Number(number)
            this.storage.day.dailySpin = true
            updateLocalStorage(this.storage)
        },
        resetStorage() {
            createLocalStorage(new Date().toISOString().split('T')[0])
            this.storage = checkLocalStorage()
        }
    }
})
