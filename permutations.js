/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let perms = [];
    if(nums.length === 0) return perms;
    perms[0] = [nums[0]];
    for(let i=1; i<nums.length; i++){
      let newPerms = [];
      perms.forEach(p => {
        for(let j=0; j<=p.length; j++){
          let auxArr = Array.from(p);
          auxArr.splice(j,0,nums[i]);
          newPerms.push(auxArr);
        }
      });
      perms = newPerms;
    }
    return perms;
};

console.log(permute([1,2,3,4,5,6,7]));
