// https://leetcode.com/problems/minimum-window-substring/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = {};
    t.split('').forEach(c => map[c] = map[c] + 1 || 1);
    console.log(JSON.stringify(map));
    
};

console.log(minWindow("ADOBECODEBANC", "ABC"));