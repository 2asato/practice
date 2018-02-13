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

const sparky = new Dog('Sparky', 10)
sparky.setOwner('Bandit');
sparky.bark();
sparky.chaseTail();
sparky.getPrice();
console.log(sparky);
