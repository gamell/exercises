/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    function consumeZeros(x, zeros){
      let residue = 0;
      while (zeros > 0 && residue === 0){
        debugger;
        residue = x%10;
        x = x/10;
        zeros--;
      }
      return [Math.floor(x), residue === 0];
    }
    function getDigits(x){
      return Math.ceil(Math.log10(x+1));
    };
    function isPal(x){
      let currDigits = getDigits(x);
      if (x === 0 || currDigits === 1 || isNaN(x)) return true;
      let rightMost = Math.floor(x%10);
      x = Math.floor(x/10);
      let left = Math.pow(10, Math.floor(Math.log10(x)));
      let leftMost = Math.floor(x/left);
      x = x%left;
      console.log(leftMost);
      console.log(rightMost);
      console.log(x);
      if(leftMost === rightMost){
        digits = digits - 2;
        let actualDigits = getDigits(x);
        if(actualDigits < digits){ // if current digits is smaller than expected means we had some leading 0's in the previous iteration
          debugger;
          const z = consumeZeros(x, digits-actualDigits);
          if (z[1]) {
            x = z[0];
            digits = getDigits(x);
          } else {
            return false;
          }
        }
        return isPal(x);
      }
      return false;
    }
    let digits = getDigits(x);
    return isPal(x, digits);

};

console.log(isPalindrome(1001111001));
console.log(isPalindrome(1010990101));
