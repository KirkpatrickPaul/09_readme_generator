const fs = require("fs");
const inquirer = require("inquirer");
// ["title", "description", "install", "usage", "issues", "contribution", "testInstructions", "liscense", "github", "email"]
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
  },
  {
    type: "input",
    name: "contribution",
    message: "Please share guidlines for contributing to your project.",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "What are your test instructions for the project?",
  },
  {
    type: "list",
    name: "liscense",
    message: "Please select the liscense for your project.",
    choices: [
      "MIT",
      "GNU GPLv3",
      "GNU AGPLv3",
      "GNU LGPLv3",
      "MPL 2.0",
      "Apache",
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
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
