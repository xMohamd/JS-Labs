import Person from "./personClass.js"; // import Person class from personClass.js [Lab 4] file to use it in Employee class

class Employee extends Person {
  static id = 0;
  #salary;
  constructor(
    fullName,
    money,
    sleepMood,
    healthRate,
    email,
    workMood,
    salary,
    isManager
  ) {
    super(fullName, money, sleepMood, healthRate);
    this.id = ++Employee.id;
    this.email = email;
    this.workMood = workMood;
    this.salary = salary;
    this.isManager = isManager === "mngr" ? true : false;
  }

  set salary(value) {
    if (value >= 1000) {
      this.#salary = value;
    } else {
      console.log("Salary must be 1000 or more");
    }
  }

  get salary() {
    return this.#salary;
  }
  work(hours) {
    if (hours == 8) {
      this.workMood = "happy";
    } else if (hours < 8) {
      this.workMood = "tired";
    } else {
      this.workMood = "lazy";
    }
  }
}
export default Employee;
