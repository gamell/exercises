/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if(p.length === 0) return s.length === 0;

  if(p[1] !== '*'){
    return
      (
        (p[0] === s[0]) ||
        (p[0] === '.' && Boolean(s[0]))
      )
      && isMatch(s.slice(1), p.slice(1));
  }

  while(
    (p[0] === s[0]) ||
    (p[0] === '.' && Boolean(s[0]))
  )
  {
    if(isMatch(s, p.slice(2))) return true;
    s = s.slice(1);
  }

  return isMatch(s, p.slice(2));
};

// console.log(isMatch('a','.*..a'));
console.log(isMatch('','.'));
