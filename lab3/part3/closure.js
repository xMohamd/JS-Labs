// Write a nested function and explain the closure -> lexical environment.

/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words,
a closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
*/

function outerFunction() {
  // lexical environment - the environment where the function was declared
  let outerVariable = "I'm outside!";
  // inner function - a function that is defined inside another function
  function innerFunction() {
    console.log(outerVariable); // "I'm outside!"
  }
  // return the inner function, exposing it to outer scopes
  return innerFunction;
}
// invoke the outer function and store the result in a variable
let innerFunc = outerFunction();
innerFunc(); // "I'm outside!"
