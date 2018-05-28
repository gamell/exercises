// https://leetcode.com/problems/regular-expression-matching/description/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const cache = {};

function memo(s, p) {
  const key = s + '-' + p;
  if (typeof cache[key] !== 'undefined') {
    return cache[key]; 
  } else {
    const res = isMatch(s, p);
    cache[key] = res;
    return res;
  }
}

var isMatch = function(s, p) {
  //console.log(`Matching ${s}, ${p}`);
  if (s.length === 0 && p.length === 0) return true;
  if ((p[0] === s[0] || p[0] === '.') && s.length > 0) {
      if (p[1] === '*') {
        return memo(s, p.slice(2)) || memo(s.slice(1), p.slice(2)) || memo(s.slice(1), p);
      }
      return memo(s.slice(1), p.slice(1));
  } else if (p[1] === '*') { // if there is a non-matching wildcard, remove it and keep trying
    return memo(s, p.slice(2));
  }
  return false;
};

console.log(false, isMatch('ab', '.*c'));
console.log(true, isMatch('a', 'ab*'));
console.log(false, isMatch('aaaab', 'a*a*a*c'));
console.log(false, isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*c"));
console.log(true, isMatch("", "c*c*"));

