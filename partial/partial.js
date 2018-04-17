function add( a, b ) {
  return a + b;
}

// solution
function partial(f, val) {
  return function(nextVal) {
    return f(val, nextVal);
  }
}

var add5 = partial( add, 5 );
console.log(add5( 4 )); // 9
