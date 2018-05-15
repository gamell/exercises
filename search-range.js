/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  function findFirstGreaterOrEqual(nums, target){
    let l = 0;
    let h = nums.length-1;
    while(l<h){
      let mid = l + (Math.floor((h-l)/2));
      if(target < nums[mid]){
        l = mid + 1;
      } else {
        h = mid;
      }
    }
    return l;
  }
  let start = findFirstGreaterOrEqual(nums, target);
  if(start === nums.length || nums[start] !== target) return [-1,-1];
  let finish = findFirstGreaterOrEqual(nums, target+1)-1;
  return [start, finish];
};

console.log(searchRange([5,7,7,8,8,10], 8));
