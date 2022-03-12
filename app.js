// create class constructors for manager, engineer and intern

// prompt user to input the team manager’s name, employee ID, email address, and office number
// option to add an engineer or an intern or to finish building my team

// if option to add engineer prompt to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// if option to add intern prompt to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// if finish build is selected then stop prompt and call generate HTML function
const prompt = require("./lib/Prompt");

prompt.PromptUserManager().then(() => {
  prompt.menu();
});
