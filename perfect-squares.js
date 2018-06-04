// https://leetcode.com/problems/perfect-squares/description/

/**
 * @param {number} n
 * @return {number}
 */

const cache = {};

var calcSquares = function(n, r) {
    const key = `${n}-${r}`;
    //console.log(`n: ${n} r: ${r}`);

    if (cache[key]) return cache[key];
    if (n === 0) return 0;
    if (n < 0 || r <= 0) return Number.MAX_SAFE_INTEGER;
    const square = r*r;
    const res = Math.min(calcSquares(n-square, r) + 1, calcSquares(n, r-1));
    cache[key] = res;
    //console.log(`returning ${res}`);

    return res;
}

var numSquares = function(n) {
    return calcSquares(n, Math.floor(Math.sqrt(n)));
};

console.log(1, numSquares(1));
console.log(2, numSquares(2));
console.log(3, numSquares(3));
console.log(4, numSquares(4));
console.log(5, numSquares(5));
console.log(12, numSquares(12));
console.log(13, numSquares(13));
console.log(14, numSquares(14));
