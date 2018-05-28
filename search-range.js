// https://leetcode.com/problems/search-for-a-range/description/

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


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2 = function(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  let mid = 0;
  let found = false;
  // The usual binary search and accounting for rotation.
  while(lo <= hi){
    mid = (lo+hi)/2 | 0;
    if(nums[mid] === target) {
        found = true;
        break;
    }
    if(nums[mid] < target) lo = mid+1;
    else hi = mid-1;
  }
  
  if (found) {
      lo = mid;
      hi = mid;
      while(lo - 1 >= 0 && nums[lo - 1] === nums[mid]) {
          lo--;
      }

      while(hi + 1 < nums.length && nums[hi + 1] === nums[mid]) {
          hi++;
      }
      return [lo, hi]
  } else {
      return [-1, -1];
  }
  
};