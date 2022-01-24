// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Project name required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. (Required)',
            validate: descripInput => {
                if (descripInput) {
                    return true;
                } else {
                    console.log('A description is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter instructions for installation of your project. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Installation instructions required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Usage information is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidelines.',
            validate: contribInput => {
                if (contribInput) {
                    return true;
                } else {
                    console.log('Contribution guidelines required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter testing instructions.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log("You must enter testing instructions.");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license does this project have?',
            choices: ['Apache-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL', 'MIT', 'MPL-2.0', 'CDDL-1.0', 'EPL-2.0']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?(Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("GitHub Username required.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Email address is required.");
                    return false;
                }
            }
        }
    ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) console.log(err);
        console.log('File write success');
    });
}

// TODO: Create a function to initialize app
async function init() {
    const questionAnswers = await questions();
    const generateData = await generateMarkdown(questionAnswers);
    writeToFile('./dist/README.md', generateData);
}

// Function call to initialize app
init();
