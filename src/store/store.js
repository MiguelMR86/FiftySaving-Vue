import { defineStore } from 'pinia'
import { checkLocalStorage } from '../controllers/functions.js'
const storage = checkLocalStorage()

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        storage: storage,
    }),
    actions: {
        increment() {
            this.storage.days++
        },
        eraseNumber(number) {
            this.storage.numbers = this.numbers.filter(n => n !== number)
        },
        spin() {
            const roulete = document.querySelector('.roulete')
            const quantity = document.querySelector('.quantity')
            const spinBtn = document.querySelector('.spin-btn')
            const random = storage.numbers[Math.floor(Math.random() * storage.numbers.length)]
            
            roulete.classList.add('spin')
            quantity.classList.add('reduce')
            if (spinBtn) spinBtn.disabled = true
            
            setTimeout(() => {
                roulete.classList.remove('spin')
                quantity.classList.remove('reduce')
                quantity.textContent = random
            }, 3000)
        },
    }
})
