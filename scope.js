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

const calculate = (num1, num2, operation) => {
  if (operation === 'add') {
    return num1 + num2;
  } else if (operation === 'sub') {
    return num1 - num2;
  } else if (operation === 'mult') {
    return num1 * num2;
  } else if (operation === 'div') {
    return num1 / num2;
  } else if (operation === 'exp') {
    return Math.pow(num1, num2);
  }
}
console.log(calculate(4, 3, 'exp'));
