// function to generate markdown for README
// ["title", "description", "install", "usage", "issues", "contribution", "testInstructions", "liscense", "github", "email"]
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  * [Description](#Description)
  * [Installation Guide](#Installation-Guide)
  * [Usage Guide](#Usage-Guide)${
    data.issues !== "N/A"
      ? `
  * [Reporting Issues](#Reporting-Issues)`
      : ""
  } ${
    data.contribution !== "N/A"
      ? `
  * [Contribution Guide](#Contribution-Guide)`
      : ""
  }${
    data.testInstructions !== "N/A"
      ? `
  * [Test Instructions](#Test-Instructions)`
      : ""
  }
  * [Questions](#Questions)
  * [Liscense Information](#Liscense-Information)

  ## Description

  ${data.description}

  ##Installation Guide

  ${data.install}

  ## Usage Guide

  ${data.usage} ${
    data.issues !== "N/A"
      ? `
  
  ## Reporting Issues
  
  ${data.issues}`
      : ""
  }  ${
    data.contribution !== "N/A"
      ? `
  
## Contribution Guide

${data.contribution}`
      : ""
  } ${
    data.testInstructions !== "N/A"
      ? `
  
## Reporting Issues

${data.testInstructions}`
      : ""
  }

## Questions

If you have any questions, please feel free to contact me at [my Github](https://github.com/${github}). Or, my email address is ${email}.

## Liscense Information

For ${data.title}, I use the ${liscense} liscense.
`;
}

module.exports = generateMarkdown;
