const fs = require("fs");

// fs.readFile("../db/Engineer.json", "utf8", (err, data) => {
//   const parsedEngineers = JSON.parse(data);
//   console.log(parsedEngineers);
//   return parsedEngineers;
// });

// fs.readFile("../db/Intern.json", "utf8", (err, data) => {
//   const parsedInterns = JSON.parse(data);
//   console.log(parsedInterns);
//   return parsedInterns;
// });

const generateManager = (managerObj) => {
  return `<section class="manager">
          <h1><Manager</h1>
          <p>${managerObj.managerName}</p>
          <p>${managerObj.employeeID}</p>
          <p>${managerObj.email}</p>
          <p>${managerObj.officeNum}</p>
          </section>`;
};

const generateHTMLtemplate = () => {
  const rawdataM = fs.readFileSync("../db/Manager.json");
  const manager = JSON.parse(rawdataM);

  const rawdataE = fs.readFileSync("../db/Engineer.json");
  const engineer = JSON.parse(rawdataE);
  console.log(engineer);

  return `
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <div class="container">
      ${generateManager(manager)}
      </div>
    </body>
  </html>
      `;
};

generateHTMLtemplate();
console.log(generateHTMLtemplate());

// module.exports = { generateHTMLtemplate, generateManager };
