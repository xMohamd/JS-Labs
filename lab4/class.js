/**
 * @description - Create person using class
 * @method constructor - create person
 * @method sleep - Know person sleep mood
 * @method eat - Know person health rate
 * @method buy - Know person money available after buy
 */
class Person {
  /**
   * @description Create person
   * @param {string} fullName - person full name
   * @param {number} money - person money
   * @param {string} sleepMood - person sleep mood
   * @param {number} healthRate - person health rate
   */
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  /**
   * @description Know person sleep mood
   * @param {number} hours - person sleep hours
   */
  sleep(hours) {
    if (hours == 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  }

  /**
   * @description Know person health rate
   * @param {number} meals - person meals
   */
  eat(meals) {
    if (meals == 3) {
      this.healthRate = 100;
    } else if (meals == 2) {
      this.healthRate = 75;
    } else {
      this.healthRate = 50;
    }
  }

  /**
   * Know person money available after buy
   * @param {number} items - person items
   */
  buy(items) {
    this.money -= items * 10;
  }
}

let person1 = new Person("Ahmed", 100, "happy", 100); // Person {fullName: "Ahmed", money: 100, sleepMood: "happy", healthRate: 100}1
console.log(person1);
// person1.sleep(6); // tired
// person1.eat(2); // 75
// person1.buy(2); // 80
// console.log(person1); // Person {fullName: "Ahmed", money: 80, sleepMood: "tired", healthRate: 75}
