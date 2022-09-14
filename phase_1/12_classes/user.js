// Exercise:
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`
  }
};

const user = new User('Uma');

console.log(user.getName()); 
// 'Uma'

console.log(user.getIntroduction());
// 'Hi, my name is Uma'

// Challenge:

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map(user => user.getName());
  }

  getIntroductions() {
    return this.users.map(user => user.getIntroduction());
  }
}

const userBase = new UserBase(users);

console.log(userBase.count());
// 3

console.log(userBase.getNames());
// [ 'Uma', 'Josh', 'Ollie' ]

console.log(userBase.getIntroductions());
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]
