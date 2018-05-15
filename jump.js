/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//   const N = nums.length;
//   function solve(idx){
//     if(idx === N-1) return true;
//     for(let i = idx; i<N; i++){
//       let jump = nums[i];
//       while(jump > 0){
//         if(solve(i+jump)) return true;
//         jump--;
//       }
//     }
//     return false;
//   }
//   return solve(0);
// };

var canJump = function(nums) {
  let reach = 0;
  let reachable = true;
  nums.forEach((num,i) => {
    if(reach < i) {
      reachable = false;
      return false;
    }
    reach = Math.max(reach, i+num);
  });
  return reachable;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
