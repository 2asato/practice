// Implement a function named factorial that has one parameter: an integer, n. It must return the value of n!(i.e., n factorial).

function factorial(n) {
  if (n === 0 || n === 1)
    return n;
  for (let i = n - 1; i >= 1; i--) {
  n *= i;
  }
  return n;
}
console.log(factorial(5));
// 5 * 4 * 3 * 2 * 1
