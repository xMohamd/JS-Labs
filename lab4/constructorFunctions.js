/**
 * @description - Person constructor function
 * @param {string} fullName - person full name
 * @param {number} money - person money
 * @param {string} sleepMood - person sleep mood
 * @param {number} healthRate - person health rate
 * @method sleep - person sleep
 * @method eat - person eat
 * @method buy - person buy
 */
function Person(fullName, money, sleepMood, healthRate) {
  this.fullName = fullName;
  this.money = money;
  this.sleepMood = sleepMood;
  this.healthRate = healthRate;
  this.sleep = (hours) => {
    if (hours == 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  };
  this.eat = (meals) => {
    if (meals == 3) {
      this.healthRate = 100;
    } else if (meals == 2) {
      this.healthRate = 75;
    } else {
      this.healthRate = 50;
    }
  };
  this.buy = (items) => {
    this.money -= items * 10;
  };
}
let person1 = new Person("Ahmed", 100, "happy", 100);
console.log(person1); // Person {fullName: "Ahmed", money: 100, sleepMood: "happy", healthRate: 100}
// person1.sleep(6); // tired
// person1.eat(2); // 75
// person1.buy(2); // 80
// console.log(person1); // Person {fullName: "Ahmed", money: 80, sleepMood: "tired", healthRate: 75}
