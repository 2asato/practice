// let quotes = ['Go Hawks', 'First down Seahawks', 'Touchdown Seahawks']

// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0]);
// randomThings[2] = 'World';
// console.log(randomThings);

// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
// console.log(ourClass[2]);
// ourClass[2] = 'Octocat';
// ourClass.push('Cloud City');
// console.log(ourClass);

// const myArray = [5 ,10 ,500, 20]
// myArray.push('Egon');
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift('Bob Marley');
// console.log(myArray);
// console.log(myArray.shift());
// console.log(myArray);
// console.log(myArray.reverse());

// let x = 6;
// if (x < 5) {
//   console.log('little number');
// } else if (x > 10) {
//   console.log('big number');
// } else {
//   console.log('monkey');
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

// console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');

let kristynShoe = kristynsCloset.shift();
kristynsCloset.splice(5, 0, 'raybans')
kristynsCloset[4] = 'stained knit hat';
console.log(thomsCloset[0][1]);
console.log(thomsCloset[1][1]);
console.log(thomsCloset[2][2]);
console.log('Thom is looking fierce in a ' + thomsCloset[0][1] + ', ' + thomsCloset[1][1] + ' and ' + thomsCloset[2][1] + '!' );
thomsCloset[1][2] = 'Footie Pajamas'
console.log(thomsCloset);
// console.log(kristynsCloset);
