const Engineer = require('../lib/Engineer');


test("Engineer class", () => {
  const test_e = [{name: "Nick", id: 1, email: "nick@test.com", github: "nickgit"}];
  const engineer = new Engineer(test_e);
  expect(typeof(engineer)).toBe('object');
});

test("if engineer name is properly set", () => {
  const engineer = new Engineer("Nick", 1, "nick@test.com", "nickgit");
  expect(engineer.name).toBe("Nick");
});

test("if engineer id is propery set", () => {
  const engineer = new Engineer("Nick", 1, "nick@test.com", "nickgit");
  expect(engineer.id).toBe(1);
});

test("if engineer email is properly set", () => {
  const engineer = new Engineer("Nick", 1, "nick@test.com", "nickgit");
  expect(engineer.email).toBe("nick@test.com");
});

test("getEmail method of engineer class", () => {
  const engineer = new Engineer("Nick", 1, "nick@test.com", "nickgit");
  expect(engineer.getGithub()).toBe("nickgit");
});

test("getRole method of engineer class", () => {
  const engineer = new Engineer("Nick", 1, "nick@test.com", 1213444);
  expect(engineer.getRole()).toBe("Engineer");
});
