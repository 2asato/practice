// class Person {
//         constructor(name, age, eyes, hair){
//           this.legs = 2;
//           this.arms = 2;
//           this.name = name;
//           this.age = age;
//           this.eyes = eyes;
//           this.hair = hair;
//         }
//         setHair(hairColor){
//           this.hair = hairColor;
//         }
//         greet(otherPerson){
//           console.log('hi ' + otherPerson + '!');
//         }
//         jump(){
//           console.log('weeee!');
//         }
// };
//
// class SuperHero extends Person {
//
// };

// const me = new Person('Aaron', 36, 'brown', 'brown');
// me.setHair('Pink');
// console.log(me);

/// console.log(superman);

// class Person {
//   constructor(name, age, eyes, hair) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//   }
// };
//
// class Pet {
//   constructor(type, name, age, owner) {
//     this.type = type;
//     this.name = name;
//     this.age = age;
//     this.owner = owner;
//   }
// };
//
// class Artist extends Person {
//
// }
//
// const cas = new Person ('Cas', 15, 'brown', 'brown')
// console.log(cas);
//
// class Robots {
//   constructor(serial) {
//     this.serial = serial;
//   }
// };
//
// robotArr = [];
//
// const robotGenerator = () => {
//   const newRobot = new Robots(robotArr.length);
//   robotArr.push(newRobot);
//   return newRobot;
// }
//
// console.log(robotGenerator());
// console.log(robotGenerator());
// console.log(robotGenerator());
// console.log(robotGenerator());
// console.log(robotArr);

class Pet {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }
  setOwner(owner){
    this.owner = owner;
  }
 }

 // const noodle = new Pet('Noodle')
 // console.log(noodle);
 // noodle.setOwner('Joni');
 // console.log(noodle);

 class Dog extends Pet {
   constructor(name, price) {
     super(name);
     this.price = price;
   }
   bark(){
     console.log('bark');
   }
   chaseTail(){
     console.log('oh boy oh boy oh boy');
   }
   getPrice(){
     return this.price;
   }
 }

// const sparky = new Dog('Sparky', 10)
// sparky.setOwner('Bandit');
// sparky.bark();
// sparky.chaseTail();
// sparky.getPrice();
// console.log(sparky);

class Cat extends Pet {
  constructor(name, price) {
    super(name);
    this.price = price;
  }
  purr(){
    console.log('purrrr');
  }
  clean(){
    console.log('cleaning');
  }
  getPrice(){
    return this.price;
  }
}
const sprinkles = new Cat('Sprinkles', 5);
// sprinkles.setOwner('Crazy Cat Lady');
// sprinkles.purr();
// sprinkles.clean();
// sprinkles.getPrice();
// console.log(sprinkles);

class Person {
  constructor(name){
    this.name = name;
    this.age = 0;
    this.weight = 0;
    this.mood = 0;
    this.pets = [];
    this.bankAccount = 0;
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
  getWeight(){
    return this.weight;
  }
  greet(other_person){
    console.log('Hi ' + other_person + '!');
  }
  eat(){
    this.weight++;
    this.mood++;
  }
  exercise(){
    this.weight--;
  }
  birthday(){
    this.age++;
    this.weight++;
    this.mood--;
    this.bankAccount+=10;
  }
  buyPet(pet){
    this.pets.push(pet);
    this.mood+=10;
    this.bankAccount = this.bankAccount - (pet.getPrice());
  }
}

const aaron = new Person('Aaron');
console.log(aaron.getName());
console.log(aaron.getAge());
console.log(aaron.getWeight());
aaron.greet('Joni');
aaron.eat();
aaron.exercise();
aaron.birthday();
aaron.buyPet(sprinkles);
console.log(aaron);
