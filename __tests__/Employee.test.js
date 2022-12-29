// Import Employee class with require()
const { exportAllDeclaration } = require('@babel/types');
// const { it } = require('node:test');
const Employee = require('../lib/Employee');

// Test instantiate Employee instance
test("Employee class", () => {
  // Instantiate the Employee class with new operator to create an object and assign it to an new variable
  it('should create an array out of an employees inputted information')
    const employee = new Employee('Michelle');
  // Expect the type of the variable to be the "object" data type
    expect(employee.info).toEqual(
      expect.arrayContaining([objectContaining({name: 'Michelle', id: 10000, email: 'michelle@test.com'})])
    )
});

// Test setting name of an employee
test("employeeName", () => {
  // Assign the name of an employee to a new variable
  const name = new Employee("Nicole");
  // Instantiate the Employee class, passing the variable of the employee name as an augument, to create an object and assign it to a new variable
  it('should take the inputted name as an arguement and assigns the arguement as the name', () => {
    expect(new Employee.name.toEqual("Nicole"));
  })
  // Expect the value of the name property of the object to be equal to the value of the variable of the employee name
});

// Test setting id of an employee
test("", () => {
  // Assign a number as an id to a new variable for the employeee id
  // Instantiate the Employee class with an employee name of your choice and the id variable as input arguments to create an employee object and assign it to a new variable
  // Expect the id of the employe object to be equal to the value of the id variable
});

// Test setting email of an employee
test("", () => {
  // Assign an email to a new variable
  // Instantiate the Employee class, passing a name and an id and the email variable as input arguments, to create an employee object and assign it to a new variable
  // Expect the email of the employee object to be equal to the value of the email variable
});

// Test get name method
test("", () => {
  // Assign the name of an employee to a new variable
    // Instantiate the Employee class, passing the variable of the employee name as input augument, to create an object and assign it to an new variable
    // Expect the getName method of the object to return the name to be equal to the value of the emplyee name variable
});

// Test get id method
test("", () => {
  // Assign an id of an employee to a new variable
  // Instantiate the Employee class, passing an employee name and the id variable as auguments, to create an object and assign it to an new variable
  // Expect the getId method of the object to return the id to be equal to the value of the emplyee id variable
});

// Test get email method
test("", () => {
  // Assign an email of an employee to a new variable
  // Instantiate the Employee class, passing an employee name and an id and the email variable as auguments, to create an object and assign it to an new variable
  // Expect the getEmail method of the object to return the email to be equal to the value of the emplyee email variable
});

// Test get role method
test("", () => {
  // Assign "Employee" to a new role variable
  // Instantiate the Employee class, passing an employee name and an id and an email as auguments, to create an object and assign it to an new variable
  // Expect getRole() to return the role to be equal to the value of the role variable
});

