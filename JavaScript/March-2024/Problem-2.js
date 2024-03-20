//* Counter
//* Author: Devendra Parmar
//* Date: 20/03/2024

//? Create the function to implement the counter
var Counter = function (n) {
  let counterVariable = n - 1;
  return function () {
    counterVariable++;
    return counterVariable;
  };
};

//? Call the function
const numCount = Counter(5);
console.log(numCount());
console.log(numCount());
console.log(numCount());
