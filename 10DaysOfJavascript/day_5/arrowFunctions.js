// https://www.hackerrank.com/challenges/js10-arrows/problem

function modifyArray(nums) {
  const func = nums.map(function(num) {
    if (num % 2 == 0) {
      return 2 * num;
    } else {
      return 3 * num;
    }
  });
  return func;
}
console.log(modifyArray([1, 2, 3, 4, 5]));
