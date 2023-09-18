const fs = require('fs');
const { generateLogo } = require('./index');

describe('Logo Generator', () => {
    beforeEach(() => {
        if (fs.existsSync('logo.svg')) {
          fs.unlinkSync('logo.svg');
        }
      });
   
    it('should generate a circle SVG', () => {
        generateLogo('ABC', 'red', 'circle', 'blue');
        const svgContent = fs.readFileSync('logo.svg', 'utf-8');
        expect(svgContent).toContain('<circle cx="150" cy="100" r="100"'); 
    });

  it('should generate a triangle SVG', () => {
    generateLogo('XYZ', 'green', 'triangle', 'yellow');
    const svgContent = fs.readFileSync('logo.svg', 'utf-8');
    expect(svgContent).toContain('<polygon points="150,50 100,150 200,150"');
  });

  it('should generate a square SVG', () => {
    generateLogo('123', 'purple', 'square', 'pink');
    const svgContent = fs.readFileSync('logo.svg', 'utf-8');
    expect(svgContent).toContain('<rect x="75" y="50" width="150" height="100"');
  });
});
