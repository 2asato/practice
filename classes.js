class Person {
        greet(otherPerson){
          console.log('hi ' + otherPerson + '!');
        }
        jump(){
          console.log('weeee!');
        }
};
const me = new Person();
me.greet('Teyo');
me.jump();
// const bob = new Person();
// console.log(me);
// console.log(bob);
// console.log(typeof(me));
// console.log(typeof(bob));
