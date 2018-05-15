/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;
    while(j < nums.length){
      if(nums[i] >= nums[j]) j++;
      else {
        if(j-i > 1){ // dupes found
          nums[i+1] = nums[j];
        }
        i++; j++;
      }
    }
    return i+1;
};

var a = [1,2,2,2,3,4,4,4,5];
var len = removeDuplicates(a);
console.log(a);
console.log(len);
