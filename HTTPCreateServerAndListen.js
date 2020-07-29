const http = require('http');


// Create the server
const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from server');
});

// Listen to incoming requests
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to port 8080 on localhost');

});
