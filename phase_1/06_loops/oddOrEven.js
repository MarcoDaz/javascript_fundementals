//  Use a for loop to iterate numbers from 1 to 20, and for each of them, print whether the number is even or odd.

for (let i = 1; i < 21; i++) {
  numType = i % 2 === 0 ? 'even' : 'odd';
  console.log(i, 'is', numType);
};