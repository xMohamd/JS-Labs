let fname = prompt("Enter your first name");
let lname = prompt("Enter your last name");
let fullName = confirm(`Your full name is ${fname} ${lname}?`);
let year = prompt("Enter your birth year");
let age = 2023 - year;
console.log(`Welcome ${fname} ${lname} you are ${age} years old`);
alert(`Welcome ${fname} ${lname} you are ${age} years old`);
