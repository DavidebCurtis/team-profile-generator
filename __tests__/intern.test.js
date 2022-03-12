const Intern = require("../lib/Intern.js");

test("create new Intern from constructor", () => {
  const intern = new Intern("Margo", "47", "email@website.com", "ragsdale");

  expect(intern.name).toBe("Margo");
  expect(intern.employeeID).toBe("47");
  expect(intern.email).toBe("email@website.com");
  expect(intern.school).toBe("ragsdale");
});
