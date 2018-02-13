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

class Person {
  constructor(name, age, eyes, hair) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
  }
};

class Pet {
  constructor(type, name, age, owner) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.owner = owner;
  }
};

class Artist extends Person {

}

const cas = new Person ('Cas', 15, 'brown', 'brown')
console.log(cas);
