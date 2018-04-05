function getSecondLargestNum(nums) {
  let firstMax = [];
  let sorted_array = nums.sort(function(a, b) {return b-a;});
  let noDupes = Array.from(new Set(sorted_array));
  // console.log(noDupes);
  noDupes.splice(0, 1);
  // console.log(noDupes);
  // return Math.max(...noDupes)
  console.log(Math.max(...noDupes));
}
getSecondLargestNum([4, 4, 5, 5, 7, 8, 13, 2]);
