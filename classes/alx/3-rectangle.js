#!/usr/bin/node
// JS script to define a class, creates an instance method to print rectangle
class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || w === undefined || h === undefined) {
      return this;
    } else {
      this.width = w;
      this.height = h;
    }
  }
  print () {
    for (let count = 0; count < this.height; count++) {
      console.log('X'.repeat(this.width));
    }
  }

  double () {
    this.height = this.height * 2;
    this.width = this.width * 2;
    this.print()
  }

  rotate () {
    let ex = this.height;
    this.height = this.width;
    this.width = ex;
    this.print()
  }


}
module.exports = Rectangle;


const rect1 = new Rectangle(2, 3);
console.log('Double');
rect1.double();

console.log('Rotate');
rect1.rotate();