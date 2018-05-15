/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let idx = 0;
    let i = 0;
    let j = 0;
    while(i < haystack.length){
      while(haystack[i] === needle[j] && i < haystack.length && j < needle.length){
        i++; j++;
      }
      if(j === needle.length){ // found
        break;
      } else {
        j = 0;
        i = idx + 1;
        idx = i;
      }
    }
    return j === needle.length ? idx : -1;
};

console.log(strStr('mississippi', 'issip'));
