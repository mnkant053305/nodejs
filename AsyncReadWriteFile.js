const fs = require('fs');

fs.readFile('../text/Input.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log('Error!👀👀');
    }
    console.log(data);
    fs.writeFile('../text/Output.txt', `${data}`, err => {
        console.log('File written successfully! 😊');
    })
});

console.log('Started reading the file!');
