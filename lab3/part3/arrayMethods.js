// Use 10 of Arrays predefined methods and explain them.

// Use 10 of Arrays predefined methods and explain them.

// 1. Array.concat() - merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
console.log(array1.concat(array2)); // ["a", "b", "c", "d", "e", "f"]
console.log(array1); // ["a", "b", "c"]
console.log(array2); // ["d", "e", "f"]

// 2. Array.copyWithin() - shallow copies part of an array to another location in the same array and returns it without modifying its length.
const array3 = ["a", "b", "c", "d", "e"];
console.log(array3.copyWithin(0, 2, 4)); // ["c", "d", "c", "d", "e"]

// 3. Array.indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
const array4 = [2, 9, 9];
console.log(array4.indexOf(9)); // 1
console.log(array4.indexOf(7)); // -1

// 4. Array.findindex() - returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.
const array5 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array5.findIndex(isLargeNumber)); // 3

// 5. Array.every() - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const array6 = [1, 30, 39, 29, 10, 13];
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(array6.every(isBelowThreshold)); // true
console.log(array6.every((x) => x < 10)); // false

// 6. Array.fill() - fills all the elements of an array from a start index to an end index with a static value. The end index is not included.
const array7 = [1, 2, 3, 4];
console.log(array7);
console.log(array7.fill(0, 2, 4)); // [1, 2, 0, 0]

// 7. Array.filter() - creates a new array with all elements that pass the test implemented by the provided function.
const array8 = [12, 5, 8, 130, 44];
console.log(array8); // [12, 5, 8, 130, 44]
const result = array8.filter((element) => element > 10);
console.log(result); // [12, 130, 44]

// 8. Array.forEach() - executes a provided function once for each array element.
const array9 = ["a", "b", "c"];
console.log(array9); // ["a", "b", "c"]
array9.forEach((element) => console.log(element)); // a b c

// 9. Array.includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array10 = [1, 2, 3];
console.log(array10.includes(2)); // true
console.log(array10.includes(4)); // false

// 10. Array.join() - creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join("")); // "FireAirWater"
