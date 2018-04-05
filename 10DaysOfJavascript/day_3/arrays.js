function getSecondLargestNum(nums) {
  let sorted_array = nums.sort(function(a, b) {return b-a;});
  // sorts array from highest to lowest
  let noDupes = Array.from(new Set(sorted_array));
  // removes duplicates from sorted_array
  noDupes.splice(0, 1);
  // removes the first/highest number from noDupes
  // return Math.max(...noDupes)
  console.log(Math.max(...noDupes));
  // logs/returns the highest number from array
}
getSecondLargestNum([4, 4, 5, 5, 7, 8, 13, 2]);
