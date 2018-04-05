https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

function reverseString(s) {
  let splitS = s.split('');
  console.log(splitS);
  let reverseS = splitS.reverse();
  console.log(reverseS);
  let newS = reverseS.join('');
  console.log(newS);
}
reverseString('1234')
