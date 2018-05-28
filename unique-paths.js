// https://leetcode.com/problems/unique-paths/description/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const cache = {};

var uniquePaths = function(m, n) {
    if (m === 1 || n === 1) return 1;
    if (m === 2 && n === 2) return 2;
    // it doesn't matter what number is cols and rows, there are the same number of solutions
    // so we can cut a lot of iterations with a cache that doesn't care about cols and rows, just cells.
    const key = (m < n) ? `${m}-${n}` : `${n}-${m}`;
    if (cache[key]) return cache[key];
    const res = uniquePaths(m-1, n) + uniquePaths(m, n-1);
    cache[key] = res;
    return res;
};