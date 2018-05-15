/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const res = [];
  let curr = [];

  function isPalindrome(s, l, r){
    if(l === r) return true;
    while(l<r){
      if(s[l] !== s[r]) return false;
      l++;r--;
    }
    return true;
  }

  function solve(s, l){
    if(curr.length > 0 && l>=s.length){
      res.push(Array.from(curr));
    }
    for(let r=l; r<s.length; r++){
      if(isPalindrome(s,l,r)){
          curr.push(s.substring(l,r+1));
          solve(s, r+1);
          curr.pop();
      }
    }
  }

  solve(s,0);
  return res;
};

console.log(partition("aab"));
