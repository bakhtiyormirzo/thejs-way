// Say hello to the user
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }
  
  // TODO: ask user for first and last name
  const fName = prompt('Enter your first name:')
  const lName = prompt('Enter your last name:')

  // TODO: call sayHello() and show its result
  alert(sayHello(fName, lName))