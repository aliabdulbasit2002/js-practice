class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    return this.name + "speak";
  }
}

class Man extends Human {}
let newMan = new Man("Ali", 28);
console.log(newMan.talk());
