// https://www.hackerrank.com/challenges/js10-throw/problem

function isPositive(a) {
  if (a > 0) {
    return 'YES';
  } else if (a == 0) {
    throw new Error('Zero Error')
  } else if (a < 0) {
    throw new Error('Negative Error')
  }
}
console.log(isPositive(-4));
