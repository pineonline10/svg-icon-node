// Import required modules
const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate the SVG logo
function generateLogo(text, textColor, shape, shapeColor) {
  // Construct the SVG string based on user input
  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${shapeColor}" />
    <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
  </svg>`;

  // Save the SVG to a file named logo.svg
  fs.writeFileSync('logo.svg', svg);
  console.log('Generated logo.svg');
}

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (input) => {
        return input.length <= 3;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (e.g., red, #FF0000):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (e.g., blue, #0000FF):',
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    generateLogo(text, textColor, shape, shapeColor);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
