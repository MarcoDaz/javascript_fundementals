const fizzBuzz = (num) => {
  if (num % 15 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
};


const fizzBuzzUntil = (num) => {
  for (let i = 1; i < num + 1; i++) {
    console.log(fizzBuzz(i))
  }
}

fizzBuzzUntil(20)