const day = prompt('Enter the day:').toLowerCase()
switch (day) {
    case 'monday':
        console.log('tuesday')
        break
    case 'tuesday':
        console.log('wednesday')
        break
    case 'wednesday':
        console.log('thursday')
        break
    case 'thursday':
        console.log('friday')
        break
    case 'friday':
        console.log('saturday')
        break
    case 'saturday':
        console.log('sunday')
        break
    default:
        console.log('monday')
}