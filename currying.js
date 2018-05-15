function multiply(...args){
  if(args.length === 0) return 1;
  const partial = args.reduce((curr, prev) => curr * prev, 1);
  return function(...nextArgs){
    return nextArgs.length > 0 ? multiply(partial, ...nextArgs) : partial;
  }
}

console.log(multiply());
console.log(multiply(1,2,3)());
console.log(multiply(2)(3)(3,2)());

function curryAdd(n){
  return function(...m){
    return m.reduce((curr, prev) => curr + prev, n);
  }
}

let plusTwo = curryAdd(2);

console.log(plusTwo(2,2,2,2,2));

// lodash autocurry

const _ = require('lodash');

let mult = (...args) => args.reduce((curr, prev) => curr * prev, 1);

const multCurry = _.curry(mult);

console.log(mult(2,3,4));
console.log(multCurry(2)(2)(2));
