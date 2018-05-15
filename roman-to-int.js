/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  function charToInt(c){
    const map = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
    ]);
    if (!c) return 0;
    else return map.get(c);
  }
  let res = 0;
  let curr = 0;
  let next = 0;
  for(let i = 0; i < s.length; i++){
    curr = charToInt(s[i]);
    next = charToInt(s[i+1]);
    if(curr < next) {
      res -= curr;
    }
    else {
      res += curr;
    }
  }
  return res;
};
