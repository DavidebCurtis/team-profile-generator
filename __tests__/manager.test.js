const Manager = require("../lib/Manager.js");

test("create manager from constructor", () => {
  const manager = new Manager(
    "Greg",
    "45",
    "email@website.com",
    "office number 1"
  );

  expect(manager.name).toBe("Greg");
  expect(manager.employeeID).toBe("45");
  expect(manager.email).toBe("email@website.com");
  expect(manager.officeNum).toBe("office number 1");
  expect(manager.roll).toBe("manager");
});
