const lodash = require('lodash');

const args = process.argv.slice(2);

console.log({
  filePath: args[0],
  userName: args[1],
  year: args[2],
});