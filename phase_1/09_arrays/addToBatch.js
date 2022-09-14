// Declare a function addToBatch that takes two arguments, an array and a number,
// and returns a new array by adding the number to the array.
const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array
  }

  return array.concat(number);
};

// Make sure this function does not add the number if the array's length is already 5 or greater
// — it should just return the array untouched in that case.

module.exports = addToBatch;