const num1 = Number(prompt('Enter a number:'))
const num2 = Number(prompt('Enter a number:'))
if (num1 === num2) {
    console.log('They are equal')
} else if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
} else {
    console.log(`${num2} is greater than ${num1}`)
}