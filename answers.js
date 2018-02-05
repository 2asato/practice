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
// let sum = 0;
// for ( let i = 1; i <= 7; i++) {
//   sum = sum + 1;
//   console.log(sum);
// }

// const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log(rainbow[4])

// const aaron = {
//   favFood: 'sushi',
//   hobby: 'coding',
//   hometown: 'Shoreline',
//   datatype: 'objects'
// }
// console.log(aaron.hobby);

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
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

// console.log(crazyObject.taco[1].salsa[5]);
// console.log(crazyObject.larry.quotes[0]);
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// console.log(crazyObject.larry.nicknames[1]);
// console.log(crazyObject.larry.characters[1]);

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

let bondTitles = [];
for (let i = 0; i < bondFilms.length; i++) {
  bondTitles.push(bondFilms[i].title)
}
// console.log(bondTitles);
let oddBonds = [];
for (let i = 0; i < bondFilms.length; i++) {
  if (bondFilms[i].year % 2 != 0) {
    oddBonds.push(bondFilms[i])
  }
}
// console.log(oddBonds);
bondFilms[0].gross.replace('$', '')

const mlb = { alWest: ['Mariners', 'Angels', 'Astros', 'Athletics', 'Rangers']}
console.log(mlb.alWest[0]);
