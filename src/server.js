const { DEFAULT_PORT, LOCALHOST } = require('./constants');
const http = require('http');

http.createServer((request, response) => {
  response.end('Hello Node.js!');
}).listen(DEFAULT_PORT, LOCALHOST, () => {
  console.log(`Node.js listening on ${LOCALHOST}:${DEFAULT_PORT}`);
});