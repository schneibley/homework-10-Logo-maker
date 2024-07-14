function generateSVG(text, textColor, shape, shapeColor) {
    const svgWidth = 300;
    const svgHeight = 200;

    let svg = `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">`;

    switch (shape) {
        case 'circle':
            svg += `<circle cx="${svgWidth / 2}" cy="${svgHeight / 2}" r="${svgHeight / 4}" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            svg += `<polygon points="${svgWidth / 2},${svgHeight / 8} ${svgWidth * 7 / 8},${svgHeight * 7 / 8} ${svgWidth / 8},${svgHeight * 7 / 8}" fill="${shapeColor}" />`;
            break;
        case 'square':
            svg += `<rect x="${svgWidth / 4}" y="${svgHeight / 4}" width="${svgWidth / 2}" height="${svgHeight / 2}" fill="${shapeColor}" />`;
            break;
        default:
            break;
    }

    svg += `<text x="${svgWidth / 2}" y="${svgHeight / 2}" text-anchor="middle" dominant-baseline="middle" font-size="30" fill="${textColor}">${text}</text>`;

    svg += `</svg>`;

    return svg;
}

module.exports = { generateSVG };