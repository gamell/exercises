function sum(a, b, c) {
 return a + b + c;
};

const curry = (f, args = []) =>
  (...x) => {
    const currArgs = [...args, ...x];
    return (currArgs.length === f.length) ?
      f(...currArgs) :
      curry(f, currArgs);
  }


const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // => 6
console.log(curriedSum(1)()()()()(2)()()(3)) // => 6

//////////////// Compose

const compose = (...f) => (arg) => f.reduce((p,g) => g(p), arg);

const add = (x, y) => x + y;
const cAdd = curry(add);
const mult = (x, y) => x * y;
const cMult = curry(mult);

const mult2Add3 = compose(cAdd(3), cMult(2));
console.log(mult2Add3(4)); // 14
