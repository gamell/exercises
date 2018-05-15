/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var acum = 0;
  var max = Number.MIN_SAFE_INTEGER;
  nums.forEach(n => {
    acum = Math.max(acum+n, n);
    max = max > acum ? max : acum;
  });
  return max;
};

console.log(maxSubArray([-2,1,2,3,4,5,2,3,4,5,9,-8]));
