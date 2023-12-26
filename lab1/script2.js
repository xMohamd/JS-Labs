let message =
  "This is the first release of a calculator that only has a summation feature";
alert(message);
let firstNumber = prompt("Enter the first number");
let secondNumber = prompt("Enter the second number");
let sum = Number(firstNumber) + Number(secondNumber);
alert(`${firstNumber} + ${secondNumber} = ${sum}`);
