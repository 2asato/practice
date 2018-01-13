// let arr = [];
// let faveFoods = ['oysters', 'sushi', 'steak']
//
// console.log(faveFoods);


// const ghostBusters1984 = ["Venkman", "Spengler", "Stantz",
//                         "Zeddemore", "Melnitz", "Barrett", "Tully"];
//
// console.log(ghostBusters1984[0]);
// console.log(ghostBusters1984[2]);
// console.log(ghostBusters1984.length);

// const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch",
//               "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

// for (let i = 0; i < drSeuss.length; i++) {
//   console.log(drSeuss[i]);
// }
//
// for (let i = 1; i < drSeuss.length; i+=2) {
//   console.log(drSeuss[i]);
// }
//
// for (let i = 1; i < drSeuss.length; i+=2) {
//   console.log(i);
//   console.log(drSeuss[i]);
// }

// const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
//                         "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

// for (let i = 0; i < looneyTunesChars.length; i+=2) {
//   console.log(looneyTunesChars[i]);
// }

// for (let i = 1; i < looneyTunesChars.length; i+=2) {
//   if (i & 2 != 0) {
//     console.log(looneyTunesChars[i]);
//   }
// }

// const numbers = [21, 18, 5, 3, 2, 1, 1];
//
// numbers[2] = null;
// // console.log(numbers);
//
// numbers[0] = numbers[0] *= 10;
// console.log(numbers);

// const fruit = ["apple", "oranges", "banana",
//                         "grapes", "cherries", "blueberries", "kiwi"];
//
// console.log(fruit.indexOf('cherries'));
// console.log(fruit.reverse());

// let favTv = ['The Office', 'Parks and Rec'];
// favTv.push('Always Sunny')
// console.log(favTv);
//
// let favTvSorted = favTv.sort()
// console.log(favTvSorted);
//
// favTvSorted.push('HIMYM');
//
// let sortedReversed = favTvSorted.reverse();
// console.log(sortedReversed);
//
// console.log(sortedReversed.pop());


const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", "Baked Goods", "Waldo"]];

console.log(whereIsWaldo[3][2]);
console.log(whereIsWaldo[2][1]);
whereIsWaldo[3][1] = 'No One'
console.log(whereIsWaldo);
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);
