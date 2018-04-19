// Question 5. Write a mul function which will properly when invoked as below syntax.
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

function mul(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    }
  }
}

console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
