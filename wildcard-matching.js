// https://leetcode.com/problems/wildcard-matching/description/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const cache = new Map();

function memo(s, p) {
  const key = s + '-' + p;
  if (cache.has(key)) {
    return cache.get(key); 
  } else {
    const res = isMatch(s, p);
    cache.set(key, res);
    return res;
  }
}

var isMatch = function(s, p) {
  //console.log(`Matching ${s}, ${p}`);
  if (s.length === 0 && p.length === 0 ) return true;
  if ((p[0] === s[0] || p[0] === '?') && s.length > 0) {
      return memo(s.slice(1), p.slice(1));
  } else if (p[0] === '*') {
    return (s.length > 0) ?
        memo(s.slice(1), p.slice(1)) || memo(s.slice(1), p) || memo(s, p.slice(1)) :
        memo(s, p.slice(1));
  }
  return false;
};