https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

function reverseString(s) {
  let splitS = s.split('');
  // converts string into array of individual strings
  console.log(splitS);
  let reverseS = splitS.reverse();
  // reverses splitS
  console.log(reverseS);
  let newS = reverseS.join('');
  // joins array of strings back together into one string
  console.log(newS);
}
reverseString('1234')
