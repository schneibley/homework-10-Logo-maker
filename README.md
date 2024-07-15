# SVG Logo-maker
## Overview
The SVG Logo Generator is a Node.js application that creates a customizable SVG logo based on user inputs. This tool allows you to define the text, text color, and shape properties of your logo, which are then used to generate an SVG file.

## Features
Interactive CLI: Uses inquirer for user input.
Customizable Logo: Choose from different shapes and specify text and colors.
SVG Output: Generates a scalable SVG file.

## Demo
Watch a demo of how to use the README generator [here](https://drive.google.com/file/d/1wtOkR3dpawXWZMvTS26qM-41dDHrCOis/view)

## Installation
### Prerequisites

Ensure that you have Node.js installed on your machine.

### Steps
Clone the Repository:

git clone git@github.com:schneibley/homework-10-Logo-maker.git

### Install Dependencies:
npm install inquirer@8.2.4
npm install jest


## Usage
Run the Application:

node index.js
Follow the Prompts:

Text: Enter up to three characters for the logo.
Text Color: Specify the color for the text (using a color keyword or hex code).
Shape: Choose a shape from 'circle', 'triangle', or 'square'.
Shape Color: Specify the color for the shape (using a color keyword or hex code).
Output: The application will generate a file named logo.svg in the current directory.

Example
When running the application, you might see:

$ node index.js
Enter up to three characters: ABC
Enter text color (keyword or hex): blue
Choose a shape:
  ( ) circle
  ( ) triangle
  ( ) square
> circle
Enter shape color (keyword or hex): red
Generated logo.svg
The generated logo.svg file will look like this:

xml
Copy code
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="50" fill="red" />
    <text x="150" y="130" fill="blue" text-anchor="middle" font-size="30">ABC</text>
</svg>
## Testing
Prerequisites
Ensure jest is installed as a development dependency:


npm install --save-dev jest
### Run Tests
To execute the tests, run:
npm test
This will run the tests defined in the __tests__ directory to verify that the generated SVG file contains the correct content.

## Contributing
Contributions are welcome! 

## License
This project is licensed under the MIT License. See the LICENSE file for details.
