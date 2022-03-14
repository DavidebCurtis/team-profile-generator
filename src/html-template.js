const fs = require("fs");

const generateManager = (managerObj) => {
  return `<div class="manager">
          <h1>Manager</h1>
          <p>Name: ${managerObj.managerName}</p>
          <p>Employee ID: ${managerObj.employeeID}</p>
          <p>Email: <a href="mailto:${managerObj.email}">${managerObj.email}</a></p>
          <p>Office Number: ${managerObj.officeNum}</p>
      </div>`;
};

const generateEngineer = (engineerObj) => {
  return `${engineerObj
    .map(({ engineerName, employeeID, email, gitHub }) => {
      return `<div class="engineer">
            <h1>Engineer</h1>
            <p>Name: ${engineerName}</p>
            <p>Employee ID: ${employeeID}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>GitHub: <a href="https://github.com/${gitHub}">${gitHub}</a></p>
      </div>`;
    })
    .join("")}`;
};

const generateIntern = (internObj) => {
  return `${internObj
    .map(({ internName, employeeID, email, school }) => {
      return `<div class="intern">
            <h1>Intern</h1>
            <p>Name: ${internName}</p>
            <p>Employee ID: ${employeeID}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>School: ${school}</p>
      </div>`;
    })
    .join("")}`;
};

const generateHTMLtemplate = () => {
  const rawdataM = fs.readFileSync("./db/Manager.json");
  const manager = JSON.parse(rawdataM);

  const rawdataE = fs.readFileSync("./db/Engineer.json");
  const engineer = JSON.parse(rawdataE);

  const rawdataI = fs.readFileSync("./db/Intern.json");
  const intern = JSON.parse(rawdataI);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" href="style.css">
      <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="pagename">MY TEAM GENERATOR</div>
      <div class="container">
      ${generateManager(manager)}
      ${generateEngineer(engineer)}
      ${generateIntern(intern)}
      </div>
    </body>
  </html>
      `;
};

module.exports = { generateHTMLtemplate };
