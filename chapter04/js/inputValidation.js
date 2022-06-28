let i = true 
while (i) {
    const num = Number(prompt('Enter a number between 50 and 100:'))
    if ((num > 50) && (num < 100)) {
        i = false
        console.log(num)
    }
}