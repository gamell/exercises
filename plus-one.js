/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let i=digits.length-1; i>=0 && carry > 0; i--){
        let c = digits[i] + carry;
        if(c > 9){
           carry = 1;
           c = 0;
        } else {
            carry = 0;
        }
        digits[i] = c;
    }
    if (carry > 0) digits.unshift(carry);
    return digits;
};
