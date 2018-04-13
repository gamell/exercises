function isPalindrome(str) {
  let res = true;
  let j = 0;
  for(var i = 0; i < str.length && res; i++) {
    j = str.length - i - 1;
    res = str[i] === str[j];
  }
  return res;
}

console.log(isPalindrome("holalh"));
