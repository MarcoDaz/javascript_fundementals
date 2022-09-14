oneToTenArr = [...Array(11).keys()].slice(1);

sum = oneToTenArr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(sum)