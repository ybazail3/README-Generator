// TODO: Include packages needed for this application

// const fs = require('fs');
const inquirer = require('inquirer');

const { writeFile } = require('fs').promises

// TODO: Create an array of questions for user input
const genUser = () => {
return inquirer.prompt([
    {
        type: 'input',
        message: 'Write the title of your project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'descriptionpart1',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'descriptionpart2',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'descriptionpart3',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'descriptionpart4',
    },
    {
        type: 'input',
        message: 'What makes your project stand out?',
        name: 'descriptionpart5',
    },
    {
        type: 'input',
        message: 'Add table of contents (optional)',
        name: 'tableofcontents',
    },
    {
        type: 'input',
        message: 'Add instructions for installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Add usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Add contributors',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How do we test?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Add credits list any colllaborators with links to their GitHub profiles.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Add license (Use arrow keys)',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPLv2', 'Unlicense'],
    },
    {
        type: 'input',
        message: 'Enter GitHub username ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter you e-mail address',
        name: 'email',
    },
])
};
    // .then((answers) => {
    //     const readMe = createReadMe(answers);

    //     fs.writeFile('README.md', readMe, (err) =>
    //         err ? console.log(err) : console.log('Created README!')
    //     );
    // });

// TODO: Create a function to write README file
//  function writeToFile() {
    const createReadMe = ({
        title,
        descriptionpart1,
        descriptionpart2,
        descriptionpart3,
        descriptionpart4,
        descriptionpart5,
        tableofcontents,
        installation,
        credits,
        license,
        github,
        email }) =>
        `# ${title}
       # Description
       * ${descriptionpart1}
       * ${descriptionpart2}
       * ${descriptionpart3}
       * ${descriptionpart4}
       * ${descriptionpart5}
       # Table of Contents
       ${tableofcontents}
       # Installation
        ${installation}
        # Usage
        ${usage}
        # Contribution
        ${contribution}
        # Tests
        ${tests}
        # Credits
        - ${credits}
       #License
       The license used for this project is ${license}
       # Questions
       Github: ${github}
       Email: ${email}
       `;
    // };

// // TODO: Create a function to initialize app
function init() {
    genUser()

    .then((answers) => writeFile('README.md', createReadMe(answers)))
}

// Function call to initialize app
init();
