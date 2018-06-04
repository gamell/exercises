// https://leetcode.com/problems/factorial-trailing-zeroes/description/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    return n == 0 ? 0 : Math.trunc(n/5) + trailingZeroes(n/5);
};