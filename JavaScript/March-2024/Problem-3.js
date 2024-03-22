//* Generate Fibonacci Sequence
//* Author: Devendra Parmar
//* Date: 22/03/2024

var fibGenerator = function* () {
  // Using the *(asterisk) in the function which means we tell the javascript this is an generator function
  let num1 = 0;
  let num2 = 1;
  while (true) {
    yield num1; // yield gives the next value again an again
    [num1, num2] = [num2, num1 + num2];
  }
};

//? call the function
let callFunc = fibGenerator();
console.log(callFunc.next().value); // Output: 0
console.log(callFunc.next().value); // Output: 1
console.log(callFunc.next().value); // Output: 2
console.log(callFunc.next().value); // Output: 3
console.log(callFunc.next().value); // Output: 4
console.log(callFunc.next().value); // Output: 5
