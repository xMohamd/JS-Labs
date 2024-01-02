function validateAge(age) {
  return age > 0;
}

function askUserAge() {
  let age = prompt("Enter your age (positive numbers only): ");
  if (age === null) {
    return null;
  }
  while (!validateAge(age)) {
    alert("Error: Positive numbers only");
    age = prompt("Enter your age (positive numbers only): ");
  }
  return age;
}

while (askUserAge) {
  let age = askUserAge();
  if (age === null) {
    alert("User cancelled");
    break;
  }
  if (age >= 1 && age <= 10) {
    alert("Child");
  } else if (age >= 11 && age <= 18) {
    alert("Teenager");
  } else if (age >= 19 && age <= 50) {
    alert("Grown up");
  } else {
    alert("Old");
  }
}
