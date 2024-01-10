# Abstract, Interface and Inheritance in function constructor in Javascript

## Abstract

Abstract is a concept in OOP that allows us to hide the implementation details and show only the functionality to the user. In other words, it ignores the irrelevant details and shows only the required one. Abstraction can be achieved with either abstract classes or interfaces (which you will learn more about in the next section).

In JavaScript, we can achieve abstraction using classes and methods. An abstract class can be used to define a common interface for its subclasses. The abstract class can have abstract and concrete methods. Subclasses that extend the abstract class are required to implement the abstract methods, providing the specific implementation.

````javascript
class AbstractClass {
  constructor() {
    // Error handling to prevent creating an instance of AbstractClass directly
    if (this.constructor === AbstractClass) {
      throw new TypeError(
        'Abstract class "AbstractClass" cannot be instantiated directly.'
      );
    }
  }

  // An abstract method to be implemented in derived classes
  abstractMethod() {
    throw new TypeError('Method "abstractMethod" must be implemented.');
  }

  // A concrete method not to be overridden in derived classes
  concreteMethod() {
    console.log("AbstractClass.concreteMethod called.");
  }
}

class ConcreteClass extends AbstractClass {
  // If we didn't implement the constructor, a default constructor would be generated and in this case, it would be equivalent of this code:
  constructor() {
    super();
  }

  // If we didn't implement this method so when we create an instance of ConcreteClass, it would call the abstract method of the AbstractClass which throws an error.
  abstractMethod() {
    console.log("ConcreteClass.abstractMethod called.");
  }
}

const concreteClass = new ConcreteClass();
concreteClass.abstractMethod(); // Output: "ConcreteClass.abstractMethod called."
concreteClass.concreteMethod(); // Output: "AbstractClass.concreteMethod called."```
````

## Interface

Interface is a concept in OOP that defines the set of methods that a certain class should implement. It is a way to achieve runtime polymorphism. An interface can also be defined as a contract that specifies the rules for data communication between different components. The concept of interface is not present in JavaScript. However, TypeScript supports the concept of interfaces.

Because JavaScript doesn't have a built-in interface type, we can achieve it in two ways:

1. Using Abstract Class - as it is explained above.
2. Using Object Literal - it is a simple object that has a set of methods that must be implemented in another class.

```javascript
// Object literal that has a set of methods that must be implemented in another class
const Interface = {
  method1: function () {
    throw new Error("Interface method1 not implemented!");
  },
  method2: function () {
    throw new Error("Interface method2 not implemented!");
  },
};

// Concrete class that implements the interface methods
class ConcreteClass {
  method1() {
    console.log("method1 called.");
  }

  method2() {
    console.log("method2 called.");
  }
}

// Function that checks if the passed object implements all methods of the interface
function implementsInterface(obj, inter) {
  for (let method in inter) {
    if (typeof obj[method] !== "function") {
      return false;
    }
  }
  return true;
}

const concreteClass = new ConcreteClass();
if (implementsInterface(concreteClass, Interface)) {
  concreteClass.method1(); // Output: "method1 called."
  concreteClass.method2(); // Output: "method2 called."
} else {
  // If the passed object does not implement all methods of the interface
  console.log(
    "The ConcreteClass does not implement all methods of the Interface."
  );
}
```

## Inheritance in function constructor

In JavaScript, function constructors are used to create objects with shared properties and methods. Inheritance is achieved by linking objects through their prototypes. Each object created from a constructor has a prototype chain that allows it to inherit properties and methods from its constructor's prototype.

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  console.log("Generic animal sound");
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog("Buddy", "Labrador");
myDog.sound(); // Output: "Generic animal sound"
```
