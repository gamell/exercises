/**
 * @param {number[]} nums
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0; let j = 0;
    while(j < nums.length){
      while(nums[j] === val) {
        j++;
      }
      if(j > i){ // element found
          nums[i] = nums[j];
      }
      i++; j++;
    }
    return nums.length - (j-i);
};

var a = [3,2,2,3];
var len = removeElement(a, 3);
console.log(a);
console.log(len);
