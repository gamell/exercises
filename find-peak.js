/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let max;
  let idx = -1;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > max || typeof max === 'undefined' ){
      max = nums[i];
      idx = i;
    }
  }
  return idx;
};
