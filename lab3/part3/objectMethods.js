// Use 10 of Objects predefined methods and explain them.

// 1. Object.assign() - copies the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = Object.assign(obj1, obj2);
console.log(obj3); // {a: 1, b: 2, c: 3, d: 4}

// 2. Object.create() - creates a new object, using an existing object as the prototype of the newly created object.
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
console.log(person); // {isHuman: false, printIntroduction: ƒ}
person.printIntroduction(); // My name is undefined. Am I human? false
const me = Object.create(person);
console.log(me); // {}
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction(); // expected output: "My name is Matthew. Am I human? true"

// 3. Object.defineProperty() - adds the named property described by a given descriptor to an object.
const object1 = {};
console.log(object1); // {}
Object.defineProperty(object1, "property1", {
  value: 42,
  writable: true,
});
console.log(object1); // {property1: 42}
object1.property1 = 77; // throws an error in strict mode
console.log(object1.property1); // 77

// 4. Object.defineProperties() - defines new or modifies existing properties directly on an object, returning the object.
const object2 = {};
console.log(object2); // {}
Object.defineProperties(object2, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});
console.log(object2); // {property1: 42, property2: {}}
object2.property1 = 80;
console.log(object2.property1); // 80

// 5. Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
const object3 = { a: "somestring", b: 42 };
console.log(object3); // {a: "somestring", b: 42}
console.log(Object.entries(object3)); // [["a", "somestring"], ["b", 42]]

// 6. Object.freeze() - freezes an object: other code can't delete or change any properties.
const object4 = {
  property1: 42,
};
console.log(object4); // {property1: 42}
Object.freeze(object4); // freeze the object so that it can't be changed
object4.property1 = 33; // nothing happens
console.log(object4.property1); // 42

// 7. Object.keys() - returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const object5 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(object5); // {a: "somestring", b: 42, c: false}
console.log(Object.keys(object5)); // ["a", "b", "c"]

// 8. Object.values() - returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
const object6 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(object6); // {a: "somestring", b: 42, c: false}
console.log(Object.values(object6)); // ["somestring", 42, false]

// 9. Object.seal() - seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
const object7 = {
  property1: 42,
};
console.log(object7); // {property1: 42}
Object.seal(object7); // seal the object so that it can't be changed
object7.property1 = 33; // works as expected
object6.property2 = 44; // silently doesn't work
console.log(object7.property1); // 33

// 10. Object.is() - determines whether two values are the same value.
console.log(Object.is(object6, object7)); // false
console.log(Object.is(object6, object6)); // true
