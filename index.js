// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateReadMe = ({
    projectTitle, 
    description, 
    installation, 
    usage, 
    license, 
    contribution, 
    tests,
    username, 
    email
}) =>

`# **${projectTitle}**

//table of contents with links
## **Table of Contents**
* [Description](Description)
* [Installation](Installation)
* [Usage](Usage)
* [License](Licenses)
* [Contribution](Contribution)
* [Test](Tests)
* [Questions](Questions)


## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Licenses
${license}

## Contribution
${contribution}

## Tests
${tests}

## Questions?
Here is a link to my github. This site was built using [GitHub Repo](https://github.com${username}).
If you have any questions please email me at: + ${email}.
`
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectTitle',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Wait!! You must choose a title.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'How would you describe your project?',
            name: 'description',
            validate: function (answer) {    
                if (answer.length < 1) {
                    return console.log("You need add a description!!!");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'If applicable, Describe the usage of your project.',
            name: 'usage',
        }, 
        {
            type: 'checkbox',
            message: 'Did you use an license for your project?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
            badge: ['https://img.shields.io/badge/License-MIT-yellow.svg', 'https://img.shields.io/badge/License-Apache%202.0-blue.svg', 'https://img.shields.io/badge/License-GPLv3-blue.svg', 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg', 'https://img.shields.io/badge/License-None-blue.svg'],
        },
        {
            type: 'input',
            message: 'If applicable, Were there any contributors to your project?',
            name: 'contributing',
            
        },
        { type: 'input',
        message: 'If applicable, provide any tests written for your application and provide examples on how to run them.',
        name: 'tests',
    },
    //github username link
    //email address link with how to reach me with additional questions
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
])
}

// TODO: Create a function to write README file
const writeToFile = () => {
    questions()
    .then((answers) => {
        const genRead = generateReadMe(answers);
        console.log(genRead);
        fs.writeFile('README.md', genRead, (err) =>
              err ? console.log(err) : console.log('Thank you for answering the questins. Your README.md file has been generated!'))
    });
    }    

writeToFile();

//add badges to license


