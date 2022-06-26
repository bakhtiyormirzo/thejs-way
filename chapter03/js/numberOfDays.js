const month = Number(prompt('Enter month number'))
if ((month === 1) || (month === 3) || (month === 5) || (month === 7) || (month === 8) || (month === 10) || (month === 12)) {
    console.log(`Month ${month} has 31 days`)
} else {
    console.log(`Month ${month} has 30 days`)
}