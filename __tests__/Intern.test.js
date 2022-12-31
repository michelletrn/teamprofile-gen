const Intern = require('../lib/Intern');

test("intern class", () => {
    const test_e = [{name: "Nick", id: 1, email: "nick@test.com", school: "university"}];
    const intern = new Intern(test_e);
    expect(typeof(intern)).toBe('object');
  });
  
  test("if intern name is properly set", () => {
    const intern = new Intern("Nick", 1, "nick@test.com", "university");
    expect(intern.name).toBe("Nick");
  });
  
  test("if intern id is propery set", () => {
    const intern = new Intern("Nick", 1, "nick@test.com", "university");
    expect(intern.id).toBe(1);
  });
  
  test("if email is properly set", () => {
    const intern = new Intern("Nick", 1, "nick@test.com", "university");
    expect(intern.email).toBe("nick@test.com");
  });

  test("getEmail method of intern class", () => {
    const intern = new Intern("Nick", 1, "nick@test.com", "university");
    expect(intern.getSchool()).toBe("university");
  });

  test("getRole method of intern class", () => {
    const intern = new Intern("Nick", 1, "nick@test.com", 1213444);
    expect(intern.getRole()).toBe("Intern");
});