// Declare a variable counter initialised at the value 0 — this value will need to change, so use let rather than const.
let counter = 0;

// Declare a function called increment that:
// increments the value of counter by 1
// and prints it using console.log
const increment = () => {
  counter++;
  console.log(counter);
};

// Using setInterval, call this function every second so the counter is incremented and printed every second.
setInterval(increment, 1000);