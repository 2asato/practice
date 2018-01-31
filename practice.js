// const fun = {
//     asdf: ["afd", "matt", 'sweet']
// }
//
// console.log(fun.asdf[2]);

// const body = {
//     arm: {
//         elbow: 'pointy'
//     }
// };
// console.log(body.arm.elbow);

// const person = {
//     jump(){
//         console.log('fly!');
//     }
// };
// person.jump();

// const myList = [
//   colors = {
//     eyeColor: 'blue',
//   }
// ]
// console.log(myList[0].eyeColor);

// const myArrays = [0, 1, [0, 1, 2, 3, 4]]
// console.log(myArrays[2][4]);

// const awesome = [
//     {
//         asdf:'true'
//     },
//     3456.245,
//     ()=>{
//         console.log('fun');
//     },
//     "buddy"
// ];
// awesome[2]();

// const refrigerator = {
//     fruits: ['apple', 'pear', 'banana']
// }
// for (let i = 0; i < refrigerator.fruits.length; i++) {
//   console.log(refrigerator.fruits[i]);
// }

// const container = [
//     [1,5,7],
//     ['bear', 'dog', 'cat'],
//     [true, false, true]
// ];
// for (let i = 0; i < container.length; i++) {
//   // console.log(container[i]);
//   for ( let j = 0; j < container[i].length; j++) {
//     console.log(container[i][j]);
//   }
// }

// const createCar = () => {
//   return { tires: 4 }
// }
// console.log(createCar().tires);

// const generateShoppingList = () => {
//   return ['apple', 'banana', 'orange', 'pears']
// }
// console.log(generateShoppingList()[3]);

// const createRobot = () => {
//   return { stats: { weight: '20lbs'
//   }
//
//   }
// }
// console.log(createRobot().stats.weight);

// const generateCar = ()=>{
//     return {
//         drive(){
//             console.log("Vroom");
//         }
//     }
// }
// console.log(generateCar().drive());

// const account = {
//     tweet(){
//         return {
//             message: "fun"
//         }
//     }
// }
// console.log(account.tweet().message);

// const me = {
//     foo(){
//         return {
//             array: [2.5, 7, true]
//         }
//     }
// }
// console.log(me.foo().array[2]);

// const instruments = {
//   banjo: ["1920 gibson", "deering", "washburn"],
//   guitar: {
//     acoustic: ["martin", "taylor", "santa cruz", "gibson"],
//     electric: ["fender Strat", "telecastor", "PRS", "languedoc"],
//     nylon: ["baldwin", "cordoba"]
//   },
//   mandolin: ["eastman", "weber", "collings"]
// }
// console.log(instruments.guitar.electric[1]);
// console.log(instruments.guitar.acoustic[2]);
// console.log(instruments.banjo[2]);
// console.log(instruments.mandolin[1]);
// for (let i = 0; i < instruments.guitar.electric.length; i++) {
//   console.log(instruments.guitar.electric[i]);
// }
// instruments.singers = ['Alicia Keys', 'John Legend']
// console.log(instruments);

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favouriteHobby: "Swearing at Larry and Jeff"
    }
    ]
  }
}
// console.log(crazyObject.taco[1].salsa[5]);
// console.log(crazyObject.larry.quotes[0]);
// console.log(crazyObject.larry.characters[2].favouriteHobby);
// console.log(crazyObject.larry.nicknames[1]);
// console.log(crazyObject.larry.characters[1]);

// const matt = {
//     blink(){
//         return ()=>{
//             console.log('hi')
//         }
//     }
// }
// console.log(matt.blink()());

// const asdfasdf = [
//     true,
//     false,
//     ()=>{
//         return {
//             foo: 'some value'
//         }
//     },
//     'apple'
// ];
// console.log(asdfasdf[2]().foo);

// const list = [
//     'dogs',
//     false,
//     3.5,
//     ()=>{
//         return {
//             funStuff(){
//                 console.log('yaaassss');
//             }
//         }
//     }
// ];
// list[3]().funStuff();

// const foo = [
//     'asdfasdf',
//     'matt',
//     false,
//     6,
//     ()=>{
//         return ()=>{
//             console.log('yes!');
//         }
//     },
//     {
//         dog:'blue'
//     }
// ];
// console.log(foo[4]()());

// const foo = ()=>{
//     console.log('I have been invoked!');
// }
// foo();

// const foo = (param)=>{
//     console.log(param);
// }
// foo();

// const foo = (param, param2) => {
//     param(param2);
// }
//
// const bar = (param) => {
//     console.log(param);
// }
//
// foo(bar, 'hi');


// const foo = {
//     someMethod(callback){
//         console.log('About to invoke the callback');
//         callback();
//     }
// }
//
// const myFunc = ()=>{
//     console.log('I have been called!');
// }
// foo.someMethod(myFunc);

// const foo = {
//     height:5,
//     someMethod(callback){
//         callback();
//     }
// }
//
// const myFunc = (param)=>{
//     console.log(foo.height);
// }
// myFunc();

// const shirtColor = {
//   color: ["red", 'blue', 'green', 'white', 'pink'],
// }
// console.log(shirtColor.color.join());

// const wordReverse = (str) => {
//   let splitString = str.split('');
//   let reverseString = splitString.reverse();
//   let joined = reverseString.join('');
//   return joined;
// }
// console.log(wordReverse('hello'));
//
// const toUpperCase = (str) => {
//   return str.toUpperCase();
// }
// console.log(toUpperCase('aaron'));
//
// const repMaster = (str, func) => {
//   func(str) + ' proves that I am the rep MASTER'
// }
// console.log(repMaster('Never give your heart to a blockhead', wordReverse()));

// const sayIt = (str) => {
//   console.log(str());;
// }
//
// const holla = () => {
//   console.log('hi');
// }
//
// sayIt(holla);

const bar = {
    someMethod(param){
        param();
    }
}

const foo = {
    someMethod(){
        console.log('this method was called');
    }
}

foo.someMethod(); //fix this line
