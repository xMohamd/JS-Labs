// Let the program be user prompt
// Print a menu with the functionalities allowed.
// For example:
// For adding new employee enter “add”
// If manager press “mngr”
// if normal employee press “nrml”
// Enter your data:

//     > Name:
//     > age:

// The final menu option is “q” to quit the application.
// Hint:
// -	To store employee, you can use array or array of object
// -	Emp Id: you can use email instead of generating random id

import Employee from "./employeeClass.js";
import Office from "./officeClass.js";
function Menu() {
  const menuList =
    "Welcome to our company\n" +
    "1- Add new employee\n" +
    "2- Get all employees\n" +
    "3- Get employee by id\n" +
    "4- Fire employee\n" +
    "5- Quit\n";
  const office = new Office("Company", []);
  let exitFlag = false;
  do {
    let choice = prompt(menuList);
    choice = parseInt(choice);
    switch (choice) {
      case 1:
        let fullName = prompt("Enter your full name");
        let money = prompt("Enter current money employee has");
        let sleepMood = prompt("Enter your sleep mood (happy, tired, lazy)");
        while (
          sleepMood !== "happy" &&
          sleepMood !== "tired" &&
          sleepMood !== "lazy"
        ) {
          sleepMood = prompt(
            "Wrong input, Enter your sleep mood (happy, tired, lazy)"
          );
        }
        let healthRate = prompt("Enter your health rate (0-100)");
        while (healthRate >= 0 && healthRate >= 100) {
          healthRate = prompt("Wrong input, Enter your health rate (0-100)");
        }
        let email;
        do {
          email = prompt("Enter your email");
        } while (!email.includes("@"));
        let workMood;
        do {
          workMood = prompt("Enter your work mood (happy, tired, lazy)");
        } while (
          workMood !== "happy" &&
          workMood !== "tired" &&
          workMood !== "lazy"
        );
        let salary;
        do {
          salary = prompt("Enter your salary (1000 or more)");
        } while (salary < 1000);
        let isManager;
        do {
          isManager = prompt("Enter your is manager (mngr, nrml)");
        } while (isManager !== "mngr" && isManager !== "nrml");
        const employee = new Employee(
          fullName,
          money,
          sleepMood,
          healthRate,
          email,
          workMood,
          salary,
          isManager
        );
        office.hire(employee);
        break;
      case 2:
        console.log(office.getAllEmployees());
        break;
      case 3:
        let empIdForSearch = prompt("Enter employee id");
        console.log(office.getEmployee(empIdForSearch));
        break;
      case 4:
        let empIdForFire = prompt("Enter employee id");
        office.fire(empIdForFire);
        break;
      case 5:
        exitFlag = true;
        break;
      default:
        console.log("Invalid choice");
        break;
    }
  } while (!exitFlag);
}
Menu();
