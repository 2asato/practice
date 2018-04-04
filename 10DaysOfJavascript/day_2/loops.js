// https://www.hackerrank.com/challenges/js10-loops/problem

function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];
  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      vowels.push(s[i])
    } else {
      consonants.push(s[i]);
    }
  }
  printSingle(vowels);
  printSingle(consonants);
}
vowelsAndConsonants('javascriptloops');

function printSingle(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function isVowel(x) {
  if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
    return x
  }
}
