const inquirer = require('inquirer');
const fs = require('fs');

class LogoGenerator {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }

    async getUserInput() {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters:',
                validate: input => input.length <= 3 || 'Text must be three characters or less.'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color (keyword or hex):'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color (keyword or hex):'
            }
        ]);

        this.text = answers.text;
        this.textColor = answers.textColor;
        this.shape = answers.shape;
        this.shapeColor = answers.shapeColor;
    }

    createSVG() {
        let shapeSVG = '';

        switch (this.shape) {
            case 'circle':
                shapeSVG = `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />`;
                break;
            case 'triangle':
                shapeSVG = `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />`;
                break;
            case 'square':
                shapeSVG = `<rect x="100" y="75" width="100" height="100" fill="${this.shapeColor}" />`;
                break;
        }

        const svgContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shapeSVG}
                <text x="150" y="130" fill="${this.textColor}" text-anchor="middle" font-size="30">${this.text}</text>
            </svg>
        `.trim();

        fs.writeFileSync('logo.svg', svgContent);
    }

    async run() {
        await this.getUserInput();
        this.createSVG();
        console.log("Generated logo.svg");
    }
}

if (require.main === module) {
    const logoGenerator = new LogoGenerator();
    logoGenerator.run();
}

module.exports = LogoGenerator;