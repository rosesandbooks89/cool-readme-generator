// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//generates badge and link for license section
const renderLicense = (license) => {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "Apache") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "BSD 3-Clause License") {
    return "[[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license == "None") {
    return "No Licenses were used.";
  } else {
    return "";
  }
};
const generateReadMe = ({
  projectTitle,
  description,
  installation,
  usage,
  license,
  contribution,
  tests,
  username,
  email,
}) =>
  `# **${projectTitle}**

${renderLicense(license)}


## **Table of Contents**

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#licenses)
* [Contribution](#contribution)
* [Test](#tests)
* [Questions?](#questions)


## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License

${projectTitle} is licensed under the ${license} License.


## Contribution
${contribution}

## Tests
${tests}

## Questions?
Here is a link to my github. [GitHub Repo](https://github.com/${username}).

If you have any questions please email me at: ${email}.
`;
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "projectTitle",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Wait!! You must choose a title.");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "How would you describe your project?",
      name: "description",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You need add a description!!!");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "If applicable, Describe the usage of your project.",
      name: "usage",
    },
    {
      type: "checkbox",
      message: "Did you use an license for your project?",
      name: "license",
      choices: ["MIT", "Apache", "MPL 2.0", "BSD 3-Clause License", "None"],
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Wait!! You must choose an option");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "If applicable, Were there any contributors to your project?",
      name: "contribution",
    },
    {
      type: "input",
      message:
        "If applicable, provide any tests written for your application and provide examples on how to run them.",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
};

// TODO: Create a function to write README file
const writeToFile = () => {
  questions().then((answers) => {
    const genRead = generateReadMe(answers);
    console.log(genRead);
    fs.writeFile("README.md", genRead, (err) =>
      err
        ? console.log(err)
        : console.log(
            "Thank you for answering the questins. Your README.md file has been generated!"
          )
    );
  });
};

writeToFile();