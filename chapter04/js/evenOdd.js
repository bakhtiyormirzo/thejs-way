const num = Number(prompt('Enter a number'))

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`)
    }
  }