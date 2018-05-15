/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    function isPal(x, i, j){
      if (i >= j) return true;
      if(x[i] === x[j]){
        i++;
        j--;
        return isPal(x, i, j);
      }
      return false;
    }
    x = String(x); // transform integer into a String;
    return isPal(x, 0, x.length-1);

};

console.log(isPalindrome(1100110011));
