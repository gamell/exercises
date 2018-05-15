/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let res = new Array(220); // max 12100 positions as 110 + 110 = 220
    res[res.length-1] = 0; // set the very last digit to 0
    let carry = 0;
    let digit = 0;
    const len1 = num1.length;
    const len2 = num2.length;
    for(let i = 0; i < len1; i++){
        for(let j = 0; j < len2; j++){
            let currPosition = res.length-i-j-1;
            digit = res[currPosition] || 0;
            digit = digit + (parseInt(num1[len1-i-1])*parseInt(num2[len2-j-1]));
            carry = Math.floor(digit/10);
            digit = digit%10;
            res[currPosition] = digit;
            if (carry > 0){
                res[currPosition-1] = carry + (res[currPosition-1] || 0);
            }
        }
    }

    for(let i = 0; i < res.length-1; i++){ // set leading 0's to '', except last one
        if(res[i] > 0) break;
        res[i] = '';
    }

    return res.join('');
};
