// make a class called `Square` that inherits from
// `Rectangle` and satisfies the following snippet
function Rectangle( width, height ) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
};
// your code here

function Square(length) {

  this.length = length;

  Rectangle.call( this, length, length );
}
debugger;
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.toString = function() {
  console.log(this.length + "hola!!");
}

// /your code

var square = new Square( 4 );
console.log(square.__proto__); // toString
console.log(square.__proto__.__proto__); // area
console.log(square.area()); // 16
console.log(square.toString()); // 4 hola
console.log(Square.prototype.area === Rectangle.prototype.area); // true
