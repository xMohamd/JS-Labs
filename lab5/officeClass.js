class Office {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  }

  getAllEmployees() {
    if (this.employees.length === 0) {
      return "There are no employees";
    } else {
      const employeeInfo = this.employees.map((emp) => {
        if (emp.isManager) {
          return `Name: ${emp.fullName}\nEmail: ${emp.email}\nWork Mood: ${emp.workMood}\nManager: ${emp.isManager}`;
        } else {
          return `Name: ${emp.fullName}\nEmail: ${emp.email}\nWork Mood: ${emp.workMood}\nManager: ${emp.isManager}\nSalary: ${emp.salary}`;
        }
      });

      return employeeInfo.join("\n\n"); // Join the array into a formatted string
    }
  }

  getEmployee(empId) {
    if (this.employees.length === 0) {
      return "There are no employees";
    } else if (this.employees[empId - 1] === undefined) {
      return "Employee not found";
    } else {
      const employee = this.employees[empId - 1];
      if (employee.isManager) {
        return `Name: ${employee.fullName}\nEmail: ${employee.email}\nWork Mood: ${employee.workMood}\nManager: ${employee.isManager}`;
      } else {
        return `Name: ${employee.fullName}\nEmail: ${employee.email}\nWork Mood: ${employee.workMood}\nManager: ${employee.isManager}\nSalary: ${employee.salary}`;
      }
    }
  }

  hire(employee) {
    this.employees.push(employee);
  }

  fire(empId) {
    if (this.employees.length === 0) {
      return "There are no employees";
    } else if (this.employees[empId - 1] === undefined) {
      return "Employee not found";
    } else {
      this.employees.splice(empId - 1, 1);
    }
  }
}

export default Office;
