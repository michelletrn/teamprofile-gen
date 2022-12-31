const Employee = require('../lib/Employee');


test("Employee class", () => {
  const test_e = [{name: "Nick", id: 1, email: "nick@test.com"}];
  const employee = new Employee(test_e);
  expect(typeof(employee)).toBe('object');
});

test("if employee name is properly set", () => {
  const employee = new Employee("Nick", 1, "nick@test.com");
  expect(employee.name).toBe("Nick");
});

test("if employee id is propery set", () => {
  const employee = new Employee("Nick", 1, "nick@test.com");
  expect(employee.id).toBe(1);
});

test("if email is properly set", () => {
  const employee = new Employee("Nick", 1, "nick@test.com");
  expect(employee.email).toBe("nick@test.com");
});

test("getName method of employee class", () => {
  const employee = new Employee("Nick", 1, "nick@test.com");
  expect(employee.getName()).toBe("Nick");
});

test("getID method of employee class", () => {
  const employee = new Employee("Nick", 1, "nick@test.com");
  expect(employee.getID()).toBe(1);
});

test("getEmail method of employee class", () => {
  const employee = new Employee("Nick", 1, "nick@test.com");
  expect(employee.getEmail()).toBe("nick@test.com");
});
