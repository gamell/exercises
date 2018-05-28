// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */

let cache = {};

var climbStairs = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (cache[n]) return cache[n];
    const res = climbStairs(n-1) + climbStairs(n-2);
    cache[n] = res;
    return (res);
};