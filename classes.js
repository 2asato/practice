class Person {
        constructor(name, age, eyes, hair){
          this.legs = 2;
          this.arms = 2;
          this.name = name;
          this.age = age;
          this.eyes = eyes;
          this.hair = hair;
        }
        setHair(hairColor){
          this.hair = hairColor;
        }
        greet(otherPerson){
          console.log('hi ' + otherPerson + '!');
        }
        jump(){
          console.log('weeee!');
        }
};

class SuperHero extends Person {

};

// const me = new Person('Aaron', 36, 'brown', 'brown');
// me.setHair('Pink');
// console.log(me);

const superman = new SuperHero('Clark Kent', 30, 'blue', 'black')
console.log(superman);
