// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const n = nums.length;
  let lo = 0, hi = n - 1;
  // find the index of the smallest value using binary search.
  // Loop will terminate since mid < hi, and lo or hi will shrink by at least 1.
  // Proof by contradiction that mid < hi: if mid==hi, then lo==hi and loop would have been terminated.
  while(lo<hi){
      const mid = (lo+hi)/2 | 0;
      if (nums[mid] > nums[hi]) lo = mid + 1;
      else hi = mid;
  }
  
  const offset = lo; // index of the min element in the array
  
  // binary search with offset

  lo=0; hi=n-1;
  // The usual binary search and accounting for rotation.
  while(lo<=hi){
      const mid = (lo+hi)/2 | 0;
      const realmid = (mid+offset) % n;
      if(nums[realmid] === target) return realmid;
      if(nums[realmid] < target) lo = mid+1;
      else hi = mid-1;
  }

  return -1;
};