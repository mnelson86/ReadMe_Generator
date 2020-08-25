const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMkdn = require("./utils/generateMarkdown.js")

const questions = [
  {
    type: "input",
    message: "What is your username?",
    name: "username"
},
  {
    type: "input",
    message: "What is your github email?",
    name: "email"
  },
  {
      type: "input",
      message: "What is the project title?",
      name: "title"
  },
  {
    type: "input",
    message: "What is your project description?",
    name: "description"
  },
  {
    type: "input",
    message: "What command is required for the installation of dependencies?",
    name: "installation"
  },
  {
    type: "input",
    messaga: "What additional information does the user need to know about the repository?",
    name: "usage"
  },
  {
    type: "input",
    message: "What does the user need to know about making contributions to the repository?",
    name: "contributing"
  },
  {
    type: "input",
    message: "What command is required to run the test?",
    name: "testing"
  },
];
function gatherQuestions() {
  inquirer.prompt(questions)
  .then((response) => {
    console.log("generating README");
    console.log(response);
    writeREADME("README.md", generateMarkdown(response));
  })
}

function writeREADME(fileName, response) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), response);
}

gatherQuestions();
// function to write reponses to files