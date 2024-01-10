/**
 * @description - Create person using class
 * @method constructor - create person
 * @method sleep - Know person sleep mood
 * @method eat - Know person health rate
 * @method buy - Know person money available after buy
 */
class Person {
  #healthRate; // private property
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
   * setter for healthRate private property
   * @description set person health rate
   * @param {number} value - person health rate
   */
  set healthRate(value) {
    if (value >= 0 && value <= 100) {
      this.#healthRate = value;
    } else {
      console.log("Health rate must be between 0 and 100");
    }
  }
  /**
   * getter for healthRate private property
   * @description get person health rate
   * @returns {number} - person health rate
   */
  get healthRate() {
    return this.#healthRate;
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

export default Person;
