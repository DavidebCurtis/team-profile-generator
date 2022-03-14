const fs = require("fs");
const fileContent = "./src/html-template.js";

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/team-profile.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File has been created!",
      });
    });
  });
};

module.exports = { writeFile };
