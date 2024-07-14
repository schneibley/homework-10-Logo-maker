const fs = require('fs');
const inquirer = require('inquirer');
const { generateSVG } = require('./svgBuilder');

const shapes = ['circle', 'triangle', 'square'];

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: function (input) {
            return input.length > 0 && input.length <= 3;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (e.g., "red" or "#FF0000"):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: shapes
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (e.g., "blue" or "#0000FF"):'
    }
];

async function run() {
    try {
        const answers = await inquirer.prompt(questions);
        const { text, textColor, shape, shapeColor } = answers;

        const svgContent = generateSVG(text, textColor, shape, shapeColor);

        fs.writeFileSync('logo.svg', svgContent);

        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error generating logo:', error);
    }
}

run();