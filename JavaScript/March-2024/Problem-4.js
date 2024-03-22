//* Generate Fibonacci Sequence Type-2
//* Author: Devendra Parmar
//* Date: 22/03/2024

var fib = function (n) {
  let num1 = 0;
  let num2 = 1;
  for (let i = 0; i < n; i++) {
    let temp = num1;
    num1 = num1 + num2;
    num2 = temp;
    console.log(num2);
  }
};

fib(5);
