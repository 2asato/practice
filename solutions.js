// const checkPalindrome = (str) => {
//   let split = str.split('');
//   // console.log(split);
//   let reverse = split.reverse();
//   // console.log(reverse);
//   let joined = reverse.join('');
//   // console.log(joined);
//   if (str === joined){
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// checkPalindrome('radar');

// const calculateSide = (sideA, sideB) => {
//   let cSquared = Math.pow(sideA, 2) + Math.pow(sideB, 2);
//   let sideC = Math.sqrt(cSquared);
//   return sideC;
// }
// console.log(calculateSide(8, 6));

// const sumArray = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i] + sum;
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

// const checkPrime = (num) => {
//   for ( let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// console.log(checkPrime(37));
//
// const printPrimes = (max) => {
//   for (let j =2; j <= max; j++) {
//     checkPrime(j);
//     if (true) {
//       console.log(j);
//     }
//   }
// }
// printPrimes(97);       doesnt work==================
