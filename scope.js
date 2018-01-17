// console.log(Math.sqrt(9));
//
// console.log(Math.pow(Math.PI, 2));
//
// console.log(Math.pow(5, 4));
//
// console.log(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);

// const printGreeting = (name) => {
//   return 'Hello there, ' + name + '!';
// }
// console.log(printGreeting('Slimer'));

// const reverseWordOrder = (str) => {
//   let result = '';
//   let wordArray = str.split(' ');
//   for ( let i = wordArray.length - 1; i >= 0; i--) {
//     result += wordArray[i] + ' ';
//   }
//   return result.trim();
// }
// console.log(reverseWordOrder('Ishmael me Call'));

// const calculate = (num1, num2, operation) => {
//   if (operation === 'add') {
//     return num1 + num2;
//   } else if (operation === 'sub') {
//     return num1 - num2;
//   } else if (operation === 'mult') {
//     return num1 * num2;
//   } else if (operation === 'div') {
//     return num1 / num2;
//   } else if (operation === 'exp') {
//     return Math.pow(num1, num2);
//   }
// }
// console.log(calculate(4, 3, 'exp'));

// const printCool = (name) => {
//   console.log(name + ' is cool');
// }
// printCool('Captain Reynolds');

// const calculateCube = (num) => {
//   return Math.pow(num, 3);
// }
// console.log(calculateCube(5));

// const isAVowel = (letter) => {
//   let upper = letter.toUpperCase();
//   // console.log(upper);
//   if (upper === 'A' || upper === 'E' || upper === 'I' || upper === 'O' || upper === 'U') {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isAVowel('m')

// const getTwoLengths = (str1, str2) => {
//   let arr = [];
//   let len1 = str1.length;
//   // console.log(len1);
//   arr.push(len1);
//   let len2 = str2.length;
//   // console.log(len2);
//   arr.push(len2);
//   return arr;
// }
// console.log(getTwoLengths('one', 'four'));

// const getMultipleLengths = (arr) => {
//   let lengths = [];
//   for (let i = 0; i < arr.length; i++) {
//     lengths.push(arr[i].length);
//     // console.log(lengths);
//   } return lengths;
// }
// console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']));

// const maxOfThree = (num1, num2, num3) => {
//   return Math.max(num1, num2, num3)
// }
// console.log(maxOfThree(6, 9, 1));

// const printLongestWord = (stringArray) => {
//   let longest = '';
//   for (let i = 0; i < stringArray.length; i++) {
//     if (stringArray[i].length > longest.length) {
//       longest = stringArray[i];
//     }
//   }
//   return longest;
// }
// console.log(printLongestWord('BoJack', 'Princess', 'Diane', 'a', 'max', 'peanutbutter', 'big', 'todd'));

// const transmogrify = (num1, num2, num3) => {
//   let product = num1 * num2;
//   return Math.pow(product, num3);
// }
// console.log(transmogrify(5, 3, 2));
