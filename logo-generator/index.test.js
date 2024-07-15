const LogoGenerator = require('./index');
const fs = require('fs');

describe('LogoGenerator', () => {
    let logoGenerator;

    beforeEach(() => {
        logoGenerator = new LogoGenerator();
        logoGenerator.text = 'ABC';
        logoGenerator.textColor = 'blue';
        logoGenerator.shape = 'circle';
        logoGenerator.shapeColor = 'red';
    });

    test('should create an SVG file with correct content', () => {
        logoGenerator.createSVG();

        const expectedSVG = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="50" fill="red" />
                <text x="150" y="130" fill="blue" text-anchor="middle" font-size="30">ABC</text>
            </svg>
        `.trim();

        const svgContent = fs.readFileSync('logo.svg', 'utf8').trim();
        expect(svgContent).toEqual(expectedSVG);
    });
});