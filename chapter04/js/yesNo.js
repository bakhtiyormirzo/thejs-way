let i = true
while (i) {
    const word = prompt('Enter yes or no')

    if ((word === 'yes') || (word === 'no')) {
        i = false
        alert(word)
    } else {
        alert('neither yes, nor no')
    }
}

