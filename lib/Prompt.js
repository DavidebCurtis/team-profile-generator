const inquirer = require("inquirer");
const fs = require("fs");

const PromptUserManager = () => {
  console.log("Welcome to TEAM-PROFILE-GENERATOR");
  console.log("Please follow the prompts to set up your teams profile");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter a Manager name: ",
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter a Manager name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeID",
        message: "Please their employee ID: ",
        validate: (employeeIDInput) => {
          if (employeeIDInput) {
            return true;
          } else {
            console.log("Please enter an employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please their email: ",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNum",
        message: "Please their office number: ",
        validate: (officeNum) => {
          if (officeNum) {
            return true;
          } else {
            console.log("Please enter an office number");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      answers.roll = "manager";
      console.log(answers);
      addToEmployeeList(answers);
    });
};

const PromptUserEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter a Engineer name: ",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter a Engineer name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeID",
        message: "Please their employee ID: ",
        validate: (employeeIDInput) => {
          if (employeeIDInput) {
            return true;
          } else {
            console.log("Please enter an employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please their email: ",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "gitHub",
        message: "Please their GitHub Username: ",
        validate: (gitHub) => {
          if (gitHub) {
            return true;
          } else {
            console.log("Please enter a GitHub Username");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      answers.roll = "engineer";
      //   console.log(answers);
      addToEmployeeList(answers);
    })
    .then(() => {
      menu();
    });
};

const PromptUserIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter a Intern name: ",
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("Please enter a Intern name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeID",
        message: "Please their employee ID: ",
        validate: (employeeIDInput) => {
          if (employeeIDInput) {
            return true;
          } else {
            console.log("Please enter an employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please their email: ",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please a school name: ",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter a school name");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      answers.roll = "intern";
      //   console.log(answers);
      addToEmployeeList(answers);
    })
    .then(() => {
      menu();
    });
};

const menu = () => {
  return inquirer
    .prompt([
      {
        type: "checkbox",
        name: "continueOrFinish",
        message:
          "Would you like to add an Engineer, add an Intern or finish buidling your team?",
        choices: [
          "Add Engineer",
          "Add Intern",
          new inquirer.Separator(),
          "Finish buidling my team",
        ],
      },
    ])
    .then((answers) => {
      const p = answers.continueOrFinish.toString();
      if (p === "Add Engineer") {
        console.log("Picked Add Engineer");
        PromptUserEngineer();
      }
      if (p === "Add Intern") {
        console.log(" Picked Add Intern");
        PromptUserIntern();
      }
      if (p === "Finish buidling my team") {
        console.log("Picked Finish buidling my team");
      }
      if (answers.continueOrFinish.length > 1) {
        console.log("---------You must only pick one---------");
        menu();
      } else {
        // const generate = require("../src/html-template.js");
        // generate.generateHTMLtemplate();
        return true;
      }
    });
};

const addToEmployeeList = (info) => {
  if (info.roll == "manager") {
    fs.readFile("./db/Manager.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        fs.writeFile(
          "./db/Manager.json",
          JSON.stringify(info, null, 2),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info("Successfully updated Managers!")
        );
      }
    });
  }
  if (info.roll == "engineer") {
    fs.readFile("./db/Engineer.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data.length == 0) {
        const engineerArr = [];
        engineerArr.push(info);
        fs.writeFile(
          "./db/Engineer.json",
          JSON.stringify(engineerArr, null, 2),
          (writeErr) =>
            writeErr
              ? console.log(writeErr)
              : console.log("Successfully updated Engineers!")
        );
      } else {
        const parsedEngineers = JSON.parse(data);
        parsedEngineers.push(info);

        fs.writeFile(
          "./db/Engineer.json",
          JSON.stringify(parsedEngineers, null, 2),
          (writeErr) =>
            writeErr
              ? console.log(writeErr)
              : console.log("Successfully updated Engineers!")
        );
      }
    });
  }
  if (info.roll == "intern") {
    fs.readFile("./db/Intern.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data.length == 0) {
        const internArr = [];
        internArr.push(info);
        fs.writeFile(
          "./db/Intern.json",
          JSON.stringify(internArr, null, 2),
          (writeErr) =>
            writeErr
              ? console.log(writeErr)
              : console.log("Successfully updated Engineers!")
        );
      } else {
        const parsedInterns = JSON.parse(data);
        parsedInterns.push(info);

        fs.writeFile(
          "./db/Intern.json",
          JSON.stringify(parsedInterns, null, 2),
          (writeErr) =>
            writeErr
              ? console.log(writeErr)
              : console.log("Successfully updated Engineers!")
        );
      }
    });
  }
};

module.exports = {
  PromptUserManager,
  PromptUserEngineer,
  PromptUserIntern,
  menu,
};
