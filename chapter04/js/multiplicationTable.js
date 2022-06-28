let num = 0
let i = true
while (i) {
    num = Number(prompt('Enter a number between 1-9'))
    if ((num >= 1) && (num <= 9)) {
        i = false
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num*i}`)
}