/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var map = new Map();
  const aCode = 'a'.charCodeAt(0);
  strs.forEach(str => {
    let canonical = [];
    for(let i = 0; i < str.length; i++){
      const charCode = str.charCodeAt(i) - aCode;
      canonical[charCode] = canonical[charCode] || 0;
      canonical[charCode]++;
    }
    canonical = canonical.join(0);
    let anagrams = map.get(canonical) || [];
    anagrams.push(str);
    map.set(canonical, anagrams);
  });
  return Array.from(map.values());
};

console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","wep","doc"]));
