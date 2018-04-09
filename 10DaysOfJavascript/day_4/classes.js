class Polygon {
  constructor(lengths) {
    this.lengths = lengths;
  }
  perimeter(){
    let sum = 0;
    this.lengths.forEach(function(len){
      sum += len;
    });
    return sum;
  }
}
let poly1 = new Polygon([3, 4, 5]);
console.log(poly1);
console.log(poly1.perimeter());
