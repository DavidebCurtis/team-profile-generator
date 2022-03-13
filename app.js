const prompt = require("./lib/Prompt");

prompt.PromptUserManager().then(() => {
  prompt.menu();
});
