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

console.log(findPeakElement([1,2,3,4,5,9,0,10,11,2,3,5,7,20]));
