class Manager {
  constructor(name, id, email, num) {
    this.name = name;
    this.employeeID = id;
    this.email = email;
    this.officeNum = num;
    this.roll = "manager";
  }
}

module.exports = Manager;
