// Write a for loop that will log only the even numbers in 0 through 200.
// for (let i = 0; i <= 200; i+=2){
//   console.log(i);
// }
// let random = ['...human...why are you taking pics of me?', '...the catnip made me do it...', '...why does the red dot always get away...']
// for (let i = 1; i <= 20; i++) {
//   console.log('Love me, pet me! HSSSSS!');
//   if (i % 2 === 0) {
//     console.log(random[Math.floor(Math.random() * 3)]);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else {
//     console.log(i);
//   }
// }

// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]
//
// thom[0] = 'Gameboy';
// console.log(thom);
// karolin[1] = 17;
// console.log(karolin);
// matt[2] = 'Gotham City';
// console.log(matt);
// kristyn.splice(2, 1, 'Brooklyn');
// console.log(kristyn);

// let tmnt = ['leonardo', 'donatello', 'michalangelo', 'raphael'];
// for (let i = 0; i < tmnt.length; i++) {
//   console.log(tmnt[i].toUpperCase());
// }

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// let kristynsShoe = kristynsCloset.splice(0, 1);
// console.log(kristynsCloset);
// thomsCloset.splice(2, 0, kristynsShoe);
// console.log(thomsCloset);

// for (let i = 0; i < kristynsCloset.length; i++) {
//   console.log('WHIRR: Now washing ' + kristynsCloset[i]);
// }

// console.log('Shirts: ' + thomsCloset[0], 'Pants: ' + thomsCloset[1], 'Accessories: ' + thomsCloset[2]);

// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//   if ((i % 3 === 0) || (i % 5 === 0)) {
//     sum = i + sum;
//   }
// }
// console.log(sum);
let sum = 0;
for ( let i = 1; i <= 7; i++) {
  sum = sum + 1;
  console.log(sum);
}
