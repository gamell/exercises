/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    function recursiveBinarySearch(start, end){
        console.log(`searching between: [${start}, ${end}]`);
        var middle = Math.ceil((end-start)/2);
        if (nums[middle] === target) return middle;
        if (end<=start) return (nums[start] === target) ? start : -1;
        if(nums[start] <= nums[middle]){ // no rotation here
          if (target < nums[middle] && target >= nums[start]) return recursiveBinarySearch(start, middle-1);
          else return recursiveBinarySearch(middle+1, end);
        } else { // rotation on left part of array
          if (target > nums[middle] && target <= nums[end]) return recursiveBinarySearch(middle+1, end);
          else return recursiveBinarySearch(start, middle-1);
        }

    }

    return recursiveBinarySearch(0, nums.length);
};

console.log(search([4,5,6,7,0,1,2], 1));
