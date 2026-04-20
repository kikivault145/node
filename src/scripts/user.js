/**
 * Класс пользователя
 * @param name
 * @param year
 */
class User {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.age = new Date().getFullYear() - year;
  };

  getYear = () => {
    return this.year;
  };

  getName = () => {
    return this.name;
  };

  getAge = () => {
    return this.age;
  };
}

module.exports = User;