/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  const res = [];
  if(!words || words.length < 1) return res;
  const revCache = new Map();
  const palCache = new Map();
  const map = new Map();
  function reverse(str){
    if(revCache.has(str)) {
      return revCache.get(str);
    }
    const rev = (str === '') ? '' : reverse(str.substr(1)) + str[0];
    revCache.set(str,rev);
    return rev;
  };
  words.forEach((w,i) => map.set(w,i));
  function isPalindrome(s){
    if(palCache.has(s)) return palCache.get(s);
    let l = 0;
    let r = s.length-1;
    while(l<r){
      if(s[l] !== s[r]) {
        palCache.set(s,false);
        return false;
      }
      l++;r--;
    }
    palCache.set(s,true);
    return true;
  }
  words.forEach((w,i) => {
    for(let j=0; j<=w.length; j++){
      let left = w.substring(0,j);
      let right = w.substring(j);
      if(isPalindrome(left)){
        let lpair = map.get(reverse(right));
        if(lpair !== undefined && lpair !== i){
          res.push([lpair, i]);
        }
      }
      if(isPalindrome(right)){
        let rpair = map.get(reverse(left));
        if(rpair !== undefined  && rpair !== i && right !== ''){
          res.push([i, rpair]);
        }
      }
    }
  });

  return res;
};

//console.log(palindromePairs(["a","","ba"]));

console.log(palindromePairs(["bbbbaabababaaaaaabbbbbbaabbabbaaaabbbaababaabaaaaabaaa","aaabbbbabaaabaabababbababaababaaabbbbbabbbbaabbbaa","babbbabaabbbbbbabababaabbbbaaabbaaabbaabbaabbaababbbbbababaaababbabbbabaabbabbabbabbbabbbaabbbbbababababbabbaabaaabaaab","aabbbabbababbbbaababb","bbbaabbaabaaababbaaabbababbbbbbaababaaaaababbbbababababbababbabaababbbaabbbabaaaababababaaabababaaaabbbbbbbbbabaabbbbabaaaababbbbaabbbbbbaaaaaaabbbbbaaaabbaaaaaabbaaababaabba","aaaaaaaabbaabababaabaaaababaababbaaaabbaabbaababbabaaabbbaabb","bbbaabaabaabaabbabbababbbababbababaaa","babbbabbbbabbaabbbbaabbaaaaaab","baaabbabaaabaabaabbbaabaabbaabbaaababbbbaaaaabababaabaaaaaaaaabbaaabbbabbbaabbaabaaaabbbbbababaabbbbbbababaaaaaabbaabbbbaabababbbaabbabbbabbbbaabbbaaabbaab","baaabababbbabbbbaabbbbabbbabbaaababaabaaaaaabaaabbabbabbbbbbabbbabbbabbaaaabbabaabababbababaaaaabbabbaaaaabbabaabaababababbbbbaab","babaaaaaaaabababbbbaaaababaaaababbbbaabababababaabbaabbabaaabaabbababaabbbaaabbaabbbbabbbbaaababbbbbbaab","bbbbbbbbaaabbabbaababbaabbbaaabaaabaababbaaabbaabbabbbbbbbaaaabbbbababbbbbbbabababbbbbbbbbaaababbabababa","abbababbabbaaaabbbbbbbaaabbbaaaaabbbabbbbbabaabbbabbbbaaaaaabaabababaaaaaaaaabbabbaababaaabaabaaababaabbaabbaababaabbaabaabaaababaabaaabbabbbbabaaabbbaaaabbbabbbababbabbabbbababbbbbbabbaaaabbbbba","abaa","aabbbbabbabaaaaabbababaaabbbbbababaaabaaaaaaaabbabbbbbbabbababbbabbabababbaaabaaabbbbbaaabbbabbababbabbaabbabbbabbaabbbabaababbbbaababbabababbababa","babbbaaaaabbaaaaaabbbababbaabbbbbbabbbaabbabbb","bbaabbbaaaaabbbabaaababbaabbbababbbabbbbbabaabbabaabbaabbaababaaabaaaaaaaaaaaaabaaaaabbabaaaabbbbaababbabbbaaaabbbbbabaabaaaabbaabbbbbaabbbbbaabaabb","babbaaaabababbbbabaaabaaabaaabaabbbabbababaabbabbbbabaaababababaaababbbaaaaaabaabbaababbabbabbabbbbbbaabaaabbbabbaabababbbaaaaabaaabbabb","bbbbaaabbabaaabaaabbaabaabbaa","bbabaababaaabbbababaaaaaabbbaababbabbaabaaabbbaa","bbabbbbaabbbabbaaaabbbabbabbbbbabbabbabbaaaabb","aabbaaababaaababbbabbabbaababbbbbbbabaaaabbbababaaabbaabbbababaababaababbbaaabbabbbabababbbbabbaaababaaaabbbbbabaababbbbabbababaaaabbbbaaba","baa","bba","aabaaabbbbbbabbabbababbbaabbbabbbbbabaaaabbbbbababbaababbabbaabbbaaaaaaabaaaaabaaaabaaaababbbabbbbaabbbaabaaaabbaaababbaababbabaaabbaabbababababa","bababbaabbaaaabbaaabbbabababaabaaaabbabbabaabbabbabbbabbbaabbbbbaaaaabababbbaaaabbaaabaababababaabbabaaaabbabaabaabbabababbabababbababbaabaaaabaaaababaabab","abaabbbabbbaabaaaabaabababbbbabaabaababbabaabaaaaabababaabaabbaaabbbaabbbabbbabbbbbabbabaaababaaabbbbabbbbbababbbaaaabbbaa","bbbabaabbbbbbabbabaaaabbbbababbbbaabaabbabababbbaaabbbbbbbbbbbabababbaaabbaaaabaabaaaabbbababababbbbbbbaaaaaaababbabaabbbbbbabababbbabaaabbbbaaabbbaabbbaaaaaaaaabaaababbbbaabbabaabaaaababaaa","baabaaaaabbbbaababaaaabbbaabbabaaababaabaabbbabbbabbabbbbabaaaababbbbbabbbbabbabaabbaabbaabaabbbbbaabaabababaaabaabbbbbaabbbaabba","aabbababaaabbabbaabababababbbbabbaaaabbabbbbbbbbabababaababaaababbbabbbbabaabbaabaabababababbaaabbbbbbabbaaabaaaabbbabaababbbbaabbbabaaaabbaaaabbaabaabbbbaaababbabbabaabbbaababb","abbaabbbabbbaaabbbaabbbbbbaaabababbbaabaababaabaabbabbaaabaaaabbbabbaaabbababaaaabbbababbaaababbaaabbbbaaababbabaaaaabbbbababaabaabaabbaaa","aabbbabbbbbbaaabaaababaabbaaaaababababbbbabaaaaaaabbabbaaababaabaabbbbaaaaabbaaaabaaaabbababaaa","baaaababaaaabababbaaaabbaabbabbaabbaaaabbabababaabbbaaabbbaabaaaaabaabaaaabbabbaabaabbabaababaaaabbabaabbbbbbabababbbabaaaabbbaaababaabbaabbbabaabaaaababbabbabaaaabababaaab","aabaabaabbaabbabbbbbaaaabbbbbabaaabbbaabbbaaaabbbbaabaabbbabbabbaabbaabaaabbaabbbababaababaabbbaaaabaabaaabaabbbbbabba","abbbabbaaaababaababaaabbaabbbbabbba","abaababbbabbabbaabbbbaaabaabbbaabababaabaababbbbabaaabbaaaaabbabbbbaabaaaabaaaaabaaaabbbabbabababaabbbaabbaabaaaaabbaabaabba","aabaaaaabbbabbbaaababaabaaaaabbbbaabbbbab","bbbabababbbaaaaaaaaababaaaaaaaaaaabbabaabaaabbbbbbaaba","babbbbbaaabbabbabaabaaaabbabbbaabbbbbbbabbbbababbbaaaaabbbbbbbabababbaabbbaaabaaaaababbbbabaaabbabbbaaaaaabaabbaaababbbabaababaabaabbbababbababbaaabbbabaabbbbabaababbbbbaa","aababaaabbaabbbbbaaabbababbabbaabbaabaaabbbbbbababbabbbbbbbbbaabbaaabbaaaaaaabaaabaababbabbbbab","aaaabbbbbbbabbaababbabaaababbbabaababbbaabaabaaabbaabbbbbbaabaabbabbaaabaaabbaabbbbaaaaabaaaaaababaaaaaababbbbbabbbab","bbbbbabbabbaaabababaabbbbaaaababaaabaababbaaaabbbabaabababaaabbbabbaababaaaabbabbbaababbaabbbbbabbabbaaaabbaabbaaaaababbaaaaabbbbbabab","abaababbaabbaaaaaaaababaab","baabbbaabababba","baababaababbbbbaaaaababababbbabaabaaababbbbbaabbaaababbabaabbabbbbabbabbabbabbaab","baabaaaabbaaababbabababababaaababbbbaabbabaabaabaaabbabbaaabbabbbbabbabaabbaaabababbbababbbaabababaaabaababaa","bbaabbbaaabbaabbbbaabaabaabbbaabababababababaaaabbbbaabaaaaabbbbabaabaaababbaaaaabaabbaababbababbbbbbababbabbaabbaabbbaabb","babaaaabaabaababbabbbbbbabbaaabaabbbbbbbbabaaaabaaababbbaaaabbbabbbbbaaababababaaaaabbaabaabaaaabaabbbaaababaabbbaaaaababbbaaaababaaababbaaaaaaabbbbb","aabbbbbaaaaaaaaaaabaabbabbabbbbababaabaabbbbbababbbababaabbbaaaabbbbbabbbbaaabbabbbababbabbbaabbbaaabaaababaabaabaabaabaabbaaaaaaabbabbabbbbabaabbbbbbababaabbbaabbababb","aaaabbababaabbaababbaaaabaabbbabbbbbabaabbaaaababbaaabbaaaabaababaaabbbaaabaabababbba","aaababababaababaaaaabbbabbbabaaabbabababbbbbababbaabbaa","bababbaaabbaabaabbbbabaaabbbbbbabbaabbaabaabaabaabbaababbbaaabababbbbabbababbabababbbaabbaaabaabbaabbabbababababbabaaabaababbaaababbaaaabaaababbbbaaaaa","bbbaabbabaaabbaaaaabaababbabbababaaababbabbbaaabaaaabaaaabbbbabbaaabbabaabbbaabaaabaaabaaaabaabbbabaaaaaaababaabaaaaaababbbababbbaaa","aabbbaaabbaabababababababbaaabaaaabababbabbaabbaabbbbbbbbbaaababaabaaabaaabaaaabbabbbbbaababbbaabbabaaabbabbbaaabbaaaababaabbabbbbabbbbbaababaaabb","babbaaaabbbaaaaababbaaaabababbbabbbabbaaabaaabbbaaaaaabbbbaabababaaaabbbababbaabbbbaaaaabbaabaaabaaabbbbabbbababbbbabbbbaaabbbbaabbabababaaaababaabbabaaabbbbababbababaabbabbaaaaaaabababbbbababaa","bbababaabbabbbbbbbaaabbaaababbaaaabbabbabbaabbbbbaabbbaaabbababaaaabbbbaaaabbabababaabbbbaaaabbbabbbaaababaaaabaababbababbbabbabbabbaaaaaabaababbaaabbaabaababbaab","aaabbaaaabaababaabbabbbbaabbbabbbbababbaaabbaaaaaaaabaababababaaaaaaababbbabbbbabbbbabbbbbbbbaabbaabbbbaaaaabababbabbabaabbbbabaabbbbbabbbbbbbaaaabbbbbabaaaababbbbababbabaaaabaabbaabbbbbbaabbaaababbba","abaabbabbababaaaaababbababbababaababababbabababbaaababaaab","bbaaaababbaabaabbababbbaababbaabaabbbabababababbbaaaabbaaaaabbbbbabababababbbbb","aabababbba","bbaabbbabaabbaaaaabbbbabbabababababbabbbbbbaaabaabbababbbaaaababaababaabaabbaabaaabaaaaababaaaabbabbaabbbaabbaabaaabababababbbaabbaabbbbbbabbaaaaaaabaaaabaaaababbaaabbbba","aaaababababaabbbaaaaaabababbbaabbbaabbaaaaaabbababbabaaaaabababbabbbababbbbaaaabaabababbbaaaabaaaaaaa","abaaaaaababaaaabaaabaabaaaaabbbababbaabaaabbabbbaaabbbaababaaabbabaabbaababaabbbaaabbbbbabbbbabaaaabaaabbabbaaaaabbbabababbaaabbabbaabababaabbbaababbaababbaaaababbbaabaabbaaaaab","aabaabbbbaabbabbbbaabaaaaabaaabaaababaabaaaaabbbaababaababbbbabaaababaabbbabbaababaaabaab","babbaaaaaaabaababbbbaabaabbbbbbababbaabbaababbbbbabababbaaabbbaabaaabbaabbaaabbbaababbbbabaaab","baabaabaabb","aabaaaabbbb","baaaabbabaaaabbbaaaaabaabbbbaaaabbbbaabaaabaaaabbbbabbabbabbaaaabaaababaaabaabbbaabbabbbbababbbaa","aabbbababaaabbaababbaaaaaabababbaaaaaaabbbbbaabbbbaabbbaaababbbaaabaaabaababbaaabaaabbbaaababbbbabaaaabbabbbaababbbbbbabaabbaabbabbbaaabbaaaabbbababbbaab","abbaabbabbaabaaabbbabbaababbabbbaaaabaabbabaaaaaabbbabbbbaaabaabbababbaaabbbababbbabaabbabbababaaabbbbababaaababbaabbabbaaaaabbbabbabaaabbbabb","ababbababaaaaaabbabbbbaabbabaaabbaabbbabaaababaaabbbbbaaaaaabbbbababaabbbabaabbbaabbbabbbaaabaabaabbaabbabbabbababaaaabbbab","bbaabbbbbabaaababbbbbabbabbbabababbbbbabbaaaabababbabaaabababbabbbabaaabbabbabbabbbbabaababaabbabababbbaaababababbaabaaaaababaabbbaabbaababaabaabaabbbbbaabaabbabaaaaabaaabaabbabbbbbbbbbb","bbbabbabbaaababababaabbaaaaabbaabaaabaabbabbaabbaaababbbabbbaaabababbbababbaaaaabbbabaaaabbba","bababaabababbbababbbbbbbbababaabbbabaabaaabbababaaaababbabbaabbabaaabbbababaabbbbbabaabbabbbbabbbbbbab","abbaaaaaaabaabbbabbaaabaaabbbbaaaabaaababbbbbaaaaaaabaabaaabaaabbbabbbaaaaaabbaaaaaaabaababa","ababaabbabbbabbabbaaaaab","abbaaaaabbbabbabbbbaabbbbbabaaababbaababbaaaaaaabbabbaabbaabbaaaabaaababbbaaabbababbaababbbbbbaaabaabbaabbbabbabbabaaabbababaaaabbbbabbbaabbbaabbabababaabbaabbabababb","baaaabbaababbbab","abbabbaabaabbbbaaaaaaababaaaaabbbbaabbbabbabaaababa","baababaaabbabababbbaababbbaaaabaabbbbaaababbaaaaabbababaabbabaaaababbabbbbaabbabbaabaabbbaaaaabaaabaaabaaabbaabbbabaaaaabababaaaaabbbabaabbaaaaaaaaabbbbaaababbababaabaaaaabaabbbaabababbabbb"]));
