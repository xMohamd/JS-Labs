function areaCalculator() {
  let shape = prompt("Enter the name of the shape");
  let area = 0;
  switch (shape) {
    case "circle":
      let radius = parseInt(prompt("Enter the radius"));
      area = Math.PI * radius * radius;
      break;
    case "triangle":
      let baseTriangle = parseInt(prompt("Enter the base"));
      let heightTriangle = parseInt(prompt("Enter the height"));
      area = 0.5 * baseTriangle * heightTriangle;
      break;
    case "square":
      let side = parseInt(prompt("Enter the side"));
      area = side * side;
      break;
    case "rectangle":
      let length = parseInt(prompt("Enter the length"));
      let width = parseInt(prompt("Enter the width"));
      area = length * width;
      break;
    case "parallelogram":
      let baseParallelogram = parseInt(prompt("Enter the base"));
      let heightParallelogram = parseInt(prompt("Enter the height"));
      area = baseParallelogram * heightParallelogram;
      break;
    case "trapezium":
      let base1 = parseInt(prompt("Enter the base1"));
      let base2 = parseInt(prompt("Enter the base2"));
      let heightTrapezium = parseInt(prompt("Enter the height"));
      area = 0.5 * (base1 + base2) * height;
      break;
    case "ellipse":
      let a = parseInt(prompt("Enter the a"));
      let b = parseInt(prompt("Enter the b"));
      area = Math.PI * a * b;
      break;
    default:
      alert("Invalid shape");
      return;
  }
  alert("The area of the " + shape + " is " + area);
}
areaCalculator();
