// Part 1
/**
 * @class Shape
 * @property {string} name - name of shape
 * @property {number} sides - number of sides
 * @property {number} sideLength - length of side
 *
 * @method calcPerimeter - calculates perimeter of shape and logs to console
 * @returns {void}
 */
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `The perimeter of ${this.name} is ${this.sides * this.sideLength}`
    );
  }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter(); // The perimeter of square is 20
const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter(); // The perimeter of triangle is 9

// Part 2
/**
 * @class Square
 * @extends Shape
 * @property {string} name - name of shape
 * @property {number} sides - number of sides
 * @property {number} sideLength - length of side
 *
 * @method calcPerimeter - calculates perimeter of shape and logs to console
 * @method calcArea - calculates area of shape and logs to console
 */
class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    console.log(`The area of ${this.name} is ${this.sideLength ** 2}`);
  }
}

const square2 = new Square(5);
square2.calcPerimeter(); // The perimeter of square is 20
square2.calcArea(); // The area of square is 25

// Part 3

/**
 * @class Triple
 * @static
 * @property {string} customName - Tripler
 * @property {string} description - I triple any number you provide
 * @method calculate
 * @param {number} n - default 1
 * @returns {number}
 */
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";

  static calculate(n = 1) {
    return n * 3;
  }
}

/**
 * @class SquaredTriple
 * @extends Triple
 * @static
 * @property {string} longDescription
 * @property {string} description - I square the triple of any number you provide
 * @method calculat
 * @param {number} n
 * @returns {number}
 * @override
 *
 */
class SquaredTriple extends Triple {
  static longDescription;
  static description = "I square the triple of any number you provide";

  static calculate(n) {
    return super.calculate(n) ** 2;
  }
}

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18
console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // Tripler
