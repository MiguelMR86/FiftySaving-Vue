export const checkLocalStorage = () => {
    let storage = localStorage.getItem('storage')
    if (!storage) {
        localStorage.setItem('storage', JSON.stringify({
            day: {
                number: 0, // 0 -> 50
                lastDigit: 0,
                date: new Date(),
                dailySpin: false,
            },
            numbers: new Array(50).fill(0).map((_, i) => i + 1)
        }))
        storage = localStorage.getItem('storage')
    }
    return JSON.parse(storage)
}

export const updateLocalStorage = (storage) => {
    localStorage.setItem('storage', JSON.stringify(storage))
}