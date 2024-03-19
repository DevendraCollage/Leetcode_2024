//* Create Hello World Function
//* Author: Devendra Parmar
//* Date: 19/03/2024

var createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

const f = createHelloWorld();
console.log(f()); // "Hello World"
