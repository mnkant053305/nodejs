const fs = require('fs');

const readFile = fs.readFileSync('Input.txt','utf-8'); // arg1 = file path, arg2 = encoding pattern
console.log(readFile);

fs.writeFileSync('Output.txt',`Output content: ${readFile}.\nFile generated on ${Date.now()}`); // arg1 = file path, arg2 = file content
console.log('File written successfully');

