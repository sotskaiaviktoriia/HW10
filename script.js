"use strict";

//Task

class Employee {
  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static vacationDays = 18;

  yearSalary() {
    return this.salary * 12;
  }
}

const employee = new Employee("Peter", "Parker", 27, "middle", 1000);
const trainee = new Employee("Lydia", "Martin", 20, "junior", 350);
console.log(trainee);
console.log(employee.fullName);
console.log(trainee.yearSalary());
