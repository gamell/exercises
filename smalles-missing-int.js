// https://leetcode.com/problems/first-missing-positive/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const set = new Set();
  for(var i = 0; i < nums.length; i++) {
      set.add(nums[i]);
  };
  let expected = 1;
  while(set.has(expected)) {
      expected++;
  };
  return expected;
};

console.log(firstMissingPositive([1,2,0]));