let hour = Number(prompt('Hour:'))
let min = Number(prompt('Minute:'))
let sec = Number(prompt('Second:'))

if (sec >= 0 && sec <= 58) {
    sec++
    console.log(`${hour}h ${min}min ${sec}s`)
} else if (sec === 59) {
    // check for min
    sec = 0
    if (min >= 0 && min <= 58) {
        min++
        console.log(`${hour}h ${min}min ${sec}s`)
    } else if (min === 59) {
        // check for hour
        if (hour >= 0 && hour <= 23) {
            min = 0
            hour++
            console.log(`${hour}h ${min}min ${sec}s`)
        } else if (hour === 24) {
            hour = 0
            min = 0
            console.log(`${hour}h ${min}min ${sec}s`)
        } else {
            console.log('Try again!')
        }
    } else {
        console.log('Try again!')
    }
} else {
    console.log('Try again!')
}