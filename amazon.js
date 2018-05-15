function expensive () {
    console.log("Work...");
    return 123; // Some generated value
}

// problem: code a function that executes some expensive function only once and returns the cached result in subsequent invokations
// solution

function once (fn) {
   var res = null;
   var called = false;
   return function(){
       if(called) {
           return res;
       } else {
           res = fn.call(window);
           called = true;
           return res;
       }
   }
}

var cached = once(expensive);

console.log(cached()); // Work..., 123
console.log(cached()); // 123
console.log(cached()); // 123
console.log(cached()); // 123

// Test cases

1) once() --> throw exception / absorb error
2) once(function(){}) --> does nothing when called, returns undefined
3) once(f(1))
4) once(f(1,2,3))

5) try that console.log("Work...") is only outputted once upon first call


///////////// Second round

/*
 * Target sum:
 * Given an integer and an array of integers, determine whether any 2 integers in the array sum to that integer.
 */

function targetSum(t, arr){
    // first pass: subtract t from arr[i] and store somwehre
    // second pass: for each arr[i] test if is contained
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        map.put(t-arr[i], i);
    }
    let found = false;
    for(let i=0; i<arr.length; i++){
        let complimentaryIdx = map.get(arr[i]);
        if((typeof complimentaryIdx !== 'undefined') && complimentaryIdx !== i){
            found = true;
            break;
        }
    }
    return found;
}

// Test cases

0, [1,-1] > true
0, [1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,0] > true
10, [5] > false
-1, [-1,0] > true
0, [] > false
0, [ relly really big array ] > true
0, [Number.MaxInteger, -Number.MaxNegativeInteger] > false
1, [1,2,3] > false
3, [0,4,-1] > true


--------------------------------------------------------------------------------------------------------------

// problem: code a function that sums arrays that could contain arrays that could contain arrays.... of ints
// solution

function sumMyArrayAnything(a) {
    // a will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.
    if(Number.isInteger(a)) return a;
    let res = 0;
    if(Array.isArray(a)){
        a.forEach(function(elem){
            res = res + sumMyArrayAnything(elem);
        });
        return res;
    }
    return 0;
}

// this should return 15

console.log(summyOfArrayAnything([[1,2,3],4,5]));
console.log(summyOfArrayAnything([1,2,3,4,5]));
console.log(summyOfArrayAnything(["kjakjsds", 1,2,3,[4,5]));
console.log(summyOfArrayAnything([[1,[2],3],4,5]));
