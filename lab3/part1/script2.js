function calculator() {
  let firstNumber = prompt("Enter first number: ");
  firstNumber = parseInt(firstNumber);
  let operation = prompt("Enter operation: ");
  let secondNumber = prompt("Enter second number: ");
  secondNumber = parseInt(secondNumber);
  let result;
  if (operation == "sum") {
    result = firstNumber + secondNumber;
  } else if (operation == "subtract") {
    result = firstNumber - secondNumber;
  } else if (operation == "multi") {
    result = firstNumber * secondNumber;
  } else if (operation == "division") {
    result = firstNumber / secondNumber;
  } else if (operation == "moduls") {
    result = firstNumber % secondNumber;
  } else {
    alert("Invalid operation");
  }
  alert(result);
  return result;
}

function bonus(res) {
  let continueOperation;
  do {
    operation = prompt("Enter operation: ");
    let secondNumber = prompt("Enter second number: ");
    secondNumber = parseInt(secondNumber);
    if (operation == "sum") {
      res = res + secondNumber;
    } else if (operation == "subtract") {
      res = res - secondNumber;
    } else if (operation == "multi") {
      res = res * secondNumber;
    } else if (operation == "division") {
      res = res / secondNumber;
    } else if (operation == "moduls") {
      res = res % secondNumber;
    } else {
      alert("Invalid operation");
    }
    alert(res);
    continueOperation = prompt("Do you want to continue? (yes/no)");
  } while (continueOperation == "yes");
}

let res = calculator();
bonus(res);
