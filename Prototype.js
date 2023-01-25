let personPrototype = {
  sayHi: () => {
    console.log("Hi, I am " + this.name + ", and I have " + this.age);
  },
  sayBye: () => {
    console.log("Bye!");
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype = personPrototype;

const person1 = new Person("Bob");

console.log(person1);
