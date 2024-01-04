/**
 * @description - Person object using OLOO pattern
 * @method init - create person
 * @method sleep - Know person sleep mood
 * @method eat - Know person health rate
 * @method buy - Know person money available after buy
 */
const Person = {
  /**
   * @description create person
   * @param {string} fullName - person full name
   * @param {number} money - person money
   * @param {number} sleepMood - person sleep mood
   * @param {number} healthRate - person health rate
   * @returns {object} - person object
   */
  init(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
    return this;
  },
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
  },
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
  },
  /**
   * @description Know person money available after buy
   * @param {number} items - person items
   */
  buy(items) {
    this.money -= items * 10;
  },
};
const person1 = Object.create(Person).init("Ahmed", 100, "happy", 100);
// console.log(person1); // {fullName: "Ahmed", money: 100, sleepMood: "happy", healthRate: 100}
// person1.sleep(6); // tired
// person1.eat(2); // 75
// person1.buy(2); // 80
// console.log(person1); // {fullName: "Ahmed", money: 80, sleepMood: "tired", healthRate: 75}
