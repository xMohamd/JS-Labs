// Ask the user to enter a string
// Count the number of vowels in that string (a,e,o,u,i)

let str = prompt("Enter a string: ");
if (str === null) {
  alert("User cancelled");
} else {
  let countVowels = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "o" ||
      char === "u" ||
      char === "i"
    ) {
      countVowels++;
    }
  }
  alert("There are " + countVowels + " vowels in the string " + str);
}
