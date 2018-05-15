/*

each_.each(list, iteratee, [context]) Alias: forEach
Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.

*/

function each(list, iteratee, context){
  const thiz = context || {};
  if(Array.isArray(list)){
    for(let i = 0; i<list.length; i++){
      // (element, index, list)
      iteratee.call(thiz, list[i], i, list);
    }
  } else if(list instanceof Object){ // object
    for(var key in list){
      if(Object(list).hasOwnProperty(key)){
        iteratee.call(thiz, list[key], key, list);
      }
    }
  }
  return list;
}

console.log(each([1,2,3], elem => console.log(`each: ${elem}`)));
console.log(each({one: 1, two: 2, three: 3}, (elem, key) => console.log(`${key}: ${elem}`)));

/*
bind_.bind(function, object, *arguments)
Bind a function to an object, meaning that whenever the function is called, the value of this will be the object. Optionally, pass arguments to the function to pre-fill them, also known as partial application. For partial application without context binding, use partial.
*/

function bind(fn, obj, args){
  return fn.bind(obj, args);
}

var func = function(greeting){ return greeting + ': ' + this.name };
func = bind(func, {name: 'moe'}, 'hi');
console.log(func());

/*

partial_.partial(function, *arguments)
Partially apply a function by filling in any number of its arguments, without changing its dynamic this value. A close cousin of bind. You may pass _ in your list of arguments to specify an argument that should not be pre-filled, but left open to supply at call-time.

*/

function partial(fn, ...args){
  return function(...argsTwo){
    return fn(...args, ...argsTwo);
  }
}

var subtract = function(a, b) { return b - a; };
sub5 = partial(subtract, 5);
console.log(sub5(20));

var add = function(a, b, c) { return a+b+c; };
add2 = partial(add, 2);
console.log(add2(4,4));

/*

memoize_.memoize(function, [hashFunction])
Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. The default hashFunction just uses the first argument to the memoized function as the key. The cache of memoized values is available as the cache property on the returned function.

*/

function memoize(fn, hashFn){
  let mem = function(key){
    let cache = mem.cache;
    let addr = '' + (hashFn ? hashFn.apply(this, arguments) : key);
    if(typeof cache[addr] === 'undefined'){
      cache[addr] = fn.apply(this, arguments);
    } else {
      console.log(`Returning from cache: {${addr}: ${cache[addr]}}`);
    }
    return cache[addr];
  }
  mem.cache = {};
  return mem;
}

var fib = memoize(n => n < 2 ? n: fib(n - 1) + fib(n - 2));

console.log(fib(10));

/*

throttle_.throttle(function, wait, [options])
Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, will only actually call the original function at most once per every wait milliseconds. Useful for rate-limiting events that occur faster than you can keep up with.

By default, throttle will execute the function as soon as you call it for the first time, and, if you call it again any number of times during the wait period, as soon as that period is over. If you'd like to disable the leading-edge call, pass {leading: false}, and if you'd like to disable the execution on the trailing-edge, pass
{trailing: false}.

*/

function throttle(fn, wait, options){
  let canRun = true;
  let scheduled = null;
  return function(){
    if(canRun){
      canRun = false;
      fn.call(this);
    } else {
      scheduled = scheduled ?
        scheduled :
        setTimeout(function(){
          scheduled = null;
          fn.call(this);
        }, wait);
    }
  }
}

var throttled = throttle(function(){
  console.log('Ran! '+new Date());
}, 1000)

//setInterval(throttled, 200);

/*

after_.after(count, function)
Creates a version of the function that will only be run after being called count times. Useful for grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding.

*/

function after(count, fn){
  return function(){
    if(--count < 0) fn.call();
  }
}

let a = after(3,function(){
  console.log('a was ran!!');
});

a();
a();
a();
a();
a();

function before(count, fn){
  return function(){
    if(--count >= 0) fn.call();
  }
}

let b = before(2, function(){
  console.log('b was ran');
})

b();
b();
b();

function compose(...fnList){
  return (...args) => fnList.reduce((prev, curr) => curr(prev), ...args);
}

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = compose(greet, exclaim);
console.log(welcome('moe'));
