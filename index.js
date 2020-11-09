const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// ["title", "description", "install", "usage", "issues", "contribution", "testInstructions", "license", "github", "email"]
// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project called?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
  },
  {
    type: "input",
    name: "install",
    message: "How would somebody install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe how to use your project.",
  },
  {
    type: "input",
    name: "issues",
    message: "How should a user report issues with your project?",
    default: "N/A",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please share guidlines for contributing to your project.",
    default: "N/A",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "What are your test instructions for the project?",
    default: "N/A",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license for your project.",
    choices: [
      "No License",
      "MIT",
      "GNU GPLv3",
      "GNU AGPLv3",
      "GNU LGPLv3",
      "CC-O",
      "MPL 2.0",
      "Apache 2.0",
      "Boost",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) =>
    error ? console.error(err) : console.log("README generated!")
  );
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) =>
      writeToFile("./examples/README.md", generateMarkdown(answers))
    );
}

// function call to initialize program
init();
