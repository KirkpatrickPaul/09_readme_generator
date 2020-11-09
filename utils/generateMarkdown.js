// function to generate markdown for README
// ["title", "description", "install", "usage", "issues", "contribution", "testInstructions", "license", "github", "email"]
function generateMarkdown(data) {
  let licenseLogo;
  switch (data.license) {
    case "MIT":
      licenseLogo =
        "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
      break;
    case "GNU GPLv3":
      licenseLogo =
        "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)";
      break;
    case "GNU AGPLv3":
      licenseLogo =
        "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU LGPLv3":
      licenseLogo =
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "CC-O":
      licenseLogo =
        "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)";
      break;
    case "MPL 2.0":
      licenseLogo =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Apache 2.0":
      licenseLogo =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost":
      licenseLogo =
        "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    default:
      licenseLogo = "";
  }

  return `# ${data.title}

${licenseLogo}

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
* [License Information](#License-Information)

## Description

${data.description}

## Installation Guide

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

If you have any questions, please feel free to contact me at [my Github](https://github.com/${
data.github
}). Or, my email address is ${data.email}.

## License Information

For ${data.title}, I ${
data.license === "No License"
? "did not use a license."
: `use the ${data.license} license.`
}
`;
}

module.exports = generateMarkdown;
