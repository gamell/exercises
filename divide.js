/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let res = 0;
  let sign = 1;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    sign = -1;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  if (divisor !== 1) {
    while (divisor <= dividend && dividend !== 0) {
        dividend = dividend - divisor;
        res++;
    }
  } else {
    res = dividend;
  }
  res = res * sign;
  if (res < -2147483648 || res > 2147483647) {
    res = 2147483647;
  }
  return res;
  
};

console.log(divide(-2147483648, 1));