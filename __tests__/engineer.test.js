const Engineer = require("../lib/Engineer.js");

test("create manager from constructor", () => {
  const engineer = new Engineer(
    "Bilbo",
    "46",
    "email@website.com",
    "github name"
  );

  expect(engineer.name).toBe("Bilbo");
  expect(engineer.employeeID).toBe("46");
  expect(engineer.email).toBe("email@website.com");
  expect(engineer.gitHub).toBe("github name");
});
