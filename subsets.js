/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  nums.sort();
  function backtrack(curr, start){
    res.push(Array.from(curr));
    for(let i=start; i<nums.length; i++){
      curr.push(nums[i]);
      backtrack(curr,i+1);
      curr.pop();
    }
  }
  backtrack([],0);
  return res;
};

console.log(subsets([1,2,3]));
