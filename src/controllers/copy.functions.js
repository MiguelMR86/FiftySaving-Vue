// Funcion to get the localStorage
export const checkLocalStorage = () => {
    let storage = localStorage.getItem('storage')
    let today = new Date().toISOString().split('T')[0]
    
    if (!storage) {
        createLocalStorage(today)
        storage = localStorage.getItem('storage')
    }
    else {
        checkDay(storage, today) // Add 1 to run the test
    }

    return JSON.parse(storage)
}

// Function to create the object in the localStorage
export const createLocalStorage = (today) => {
    localStorage.setItem('storage', JSON.stringify({
        day: {
            number: 1, // 0 is the first case, 1 - 50
            lastDigit: 0,
            date: today,
            dailySpin: false,
        },
        numbers: new Array(50).fill(0).map((_, i) => i + 1)
    }))
}

// Function to check if the day has changed
const checkDay = (storage, today, test = false) => {
    const { day, numbers } = JSON.parse(storage)
       
        const todayDate = test 
            ? textNextDay(new Date(today).toISOString().split('T')[0]) 
            : new Date(today).toISOString().split('T')[0]

        const storageDate = new Date(day.date).toISOString().split('T')[0]
        
        if (todayDate > storageDate) {
            const newStorage = {
                day: {
                    number: day.number + 1,
                    lastDigit: day.lastDigit,
                    date: todayDate,
                    dailySpin: false,
                },
                numbers: numbers
            }
            localStorage.setItem('storage', JSON.stringify(newStorage))
            storage = localStorage.getItem('storage')
        }
}

// Function to pass to the next day
const textNextDay = (date) => {
    date = date.split('-')
    date[2] = String(Number(date[2]) + 1)
    date = date.join('-')
    return date
}

// Function to update the localStorage
export const updateLocalStorage = (storage) => {
    localStorage.setItem('storage', JSON.stringify(storage))
    return
}

export const calculationAlgorithm = (numbers, lastDigit) => {
    return lastDigit > 25 
    ? numbers[Math.floor(Math.random() * numbers.length / 2)]
    : numbers[Math.floor(Math.random() * numbers.length)]
}