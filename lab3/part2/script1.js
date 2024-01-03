function sumAndAverage() {
  var sum = 0;
  var average = 0;
  var numbers = [];
  var count = parseInt(prompt("How many numbers do you want to enter?"));
  for (var i = 0; i < count; i++) {
    numbers[i] = parseInt(prompt("Enter number " + (i + 1)));
    sum += numbers[i];
  }
  average = sum / count;
  alert("The sum of the numbers is " + sum + "\nAnd the average is " + average);
}
sumAndAverage();
