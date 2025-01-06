const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'}); //Added content type
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

//Error handling
server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});