// const clicker = {
//   clickCount: 0,
//   click(){
//     clicker.clickCount++;
//     console.log(clicker.clickCount);;
//   }
// }
// clicker.click();

// const myInformation = {
//   name: 'Aaron',
//   age: 36,
//   fact: 'I need a job',
//   statement(){
//     console.log('My name is ' + myInformation.name + ' , ' + myInformation.fact + ' and in 10 years I will be ' + (myInformation.age + 10) + ' years old.');
//   },
//   birthday(){
//     myInformation.age++;
//     console.log(myInformation.age);
//   },
//   changeName(name){
//     myInformation.name = name;
//   }
// }
// myInformation.statement();
// myInformation.birthday();
// myInformation.changeName('Rumpelstiltskin');
// console.log(myInformation.name);

// const greeter = {
//   hello(name){
//     console.log('Hello there, ' + name);
//   },
//   goodbye(name){
//     console.log('Dueces ' + name);
//   },
//   whoAreYou(name){
//     console.log('Oh right! ' + name + ', how could I forget...!');
//   }
// }
// greeter.hello('Teyo');
// greeter.goodbye('Teyo');
// greeter.whoAreYou('Teyo');

// const stringCollector = {
//   collection: [],
//   collect(str){
//     const newString=str.split('').reverse().join('');
//     stringCollector.collection.push(newString);
//   },
//   admireCollection(){
//     for (i = 0; i < stringCollector.collection.length; i++) {
//       console.log(stringCollector.collection[i]);
//     }
//   }
// }
// stringCollector.collect('hello');
// stringCollector.collect('goodbye');
// console.log(stringCollector.collection);
// stringCollector.admireCollection();

// const atm = {
//   totalCash: 200,
//   dispenseTwenties(twenties){
//     if (atm.totalCash >= twenties * 20) {
//       let total = twenties * 20;
//       return total;
//     } else {
//       return null;
//     }
//     atm.totalCash = atm.totalCash - total;
//   }
// }
// console.log(atm.dispenseTwenties(5), atm.totalCash);
// console.log(atm.totalCash);

// const Leonardo = {
//   name: 'Leonardo',
//   color: 'blue',
//   weapon: 'Katana',
//   pizzaEaten: false,
//   eatPizza(){
//     if (Leonardo.pizzaEaten) {
//       console.log('Leonardo has already eaten pizza');
//       Leonardo.pizzaEaten = false;
//     } else {
//       console.log('Leonardo is eating pizza');
//       Leonardo.pizzaEaten = true;
//     }
//   }
// }
// Leonardo.eatPizza();
// console.log(Leonardo);
// Leonardo.eatPizza();
// console.log(Leonardo);
// Leonardo.eatPizza();
// console.log(Leonardo);

const calculator = {
  output: 0,
  multiply(x, y){
    calculator.output = x * y;
    console.log(calculator.output);
  },
  divide(x, y){
    calculator.output = x/y;
    console.log(calculator.output);
  },
  add(x, y){
    calculator.output = x + y;
    console.log(calculator.output);
  },
  subtract(x, y){
    calculator.output = x - y;
    console.log(calculator.output);
  }
}
calculator.multiply(9, 8);
calculator.divide(100, 10);
calculator.add(99, 1);
calculator.subtract(55, 33);
