const printHello = () => {
  console.log('Hello!');
}

// executeAfterDelay(5, printHello);

// // After about 5 seconds, you should see the message being logged

// Hello!

const executeAfterDelay = (seconds, callback) => {
  setTimeout(callback, 1000 * seconds);
}

executeAfterDelay(5, printHello);