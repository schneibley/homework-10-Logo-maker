const fs = require('fs');
const inquirer = require('inquirer');
const { generateSVG } = require('./svgBuilder');

const shapes = ['circle', 'triangle', 'square'];
