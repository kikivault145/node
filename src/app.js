const os = require('os');
const User = require('./user');

const username = os.userInfo().username;
console.log(username);

const user = new User(username, 18);
console.log({
  name: user.getName(),
  year: user.getYear(),
  age: user.getAge(),
});