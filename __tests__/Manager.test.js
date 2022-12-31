const Manager = require('../lib/Manager');

test("if manager name is properly set", () => {
    const manager = new Manager("Nick", 1, "nick@test.com", 1213444);
    expect(manager.name).toBe("Nick");
});

test("if manager id is set", () => {
    const manager = new Manager("Nick", 1, "nick@test.com", 1213444);
    expect(manager.id).toBe(1);
});

test("if manager email is set", () => {
    const manager = new Manager("Nick", 1, "nick@test.com", 1213444);
    expect(manager.email).toBe("nick@test.com");
});

test("getOfficeNumber method of manager class", () => {
    const manager = new Manager("Nick", 1, "nick@test.com", 1213444);
    expect(manager.officeNumber).toBe(1213444);
});

test("getRole method of manager class", () => {
    const manager = new Manager("Nick", 1, "nick@test.com", 1213444);
    expect(manager.getOfficeNumber()).toBe(1213444);
});

test("getRole method of manager class", () => {
    const manager = new Manager("Nick", 1, "nick@test.com", 1213444);
    expect(manager.getRole()).toBe("Manager");
});