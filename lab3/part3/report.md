# Report for Array methods

## Array.find()

The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```javascript
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found); // expected output: 12
```

## Array.forEach()

The forEach() method executes a provided function once for each array element.

```javascript
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element)); // expected output: "a" "b" "c"
```

## Array.map()

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1); // expected output: Array [2, 8, 18, 32]
```
