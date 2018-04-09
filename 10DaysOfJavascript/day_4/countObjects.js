function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x == objects[i].y) {
      count++;
    }
  }
  return count;
}
console.log(getCount([1, 1], [2, 3], [3, 3], [3, 4], [4, 5]));
