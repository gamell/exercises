// https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    let red = 0;
    let white = 0;
    let blue = nums.length - 1;
    let temp = 0;
    
    while (white <= blue) {
        switch (nums[white]) {
            case 0: //red
                temp = nums[red];
                nums[red] = nums[white];
                nums[white] = temp;
                white++;
                red++;
                break;
            case 1: //white 
                white++;
                break;
            case 2: // blue
                temp = nums[blue];
                nums[blue] = nums[white];
                nums[white] = temp;
                blue--;
                break;
        }
    }
};

let arr = [2,0,1];
sortColors(arr);
console.log(arr);