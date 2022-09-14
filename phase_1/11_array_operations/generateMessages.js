const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (names) => {
  return names.map((name) => {
    return `Hi ${name}! 50 % off our best candies for you today!`;
  });
};

msgs = generateMessages(names);
// [
//   'Hi Anna! 50% off our best candies for you today!',
//   'Hi Laura! 50% off our best candies for you today!',
//   'Hi Josh! 50% off our best candies for you today!',
//   'Hi Min! 50% off our best candies for you today!',
//   'Hi Karla! 50% off our best candies for you today!'
// ]

msgs.forEach(msg => console.log(msg))

