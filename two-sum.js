/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    const len = nums.length;
    let x = 0
    let y = 0;
    for(let i = 0; i < len; i++){
        map.set(target-nums[i], i);
    }
    for(let j = 0; j < len; j++){
        const currNumber = map.get(nums[j]);
        if(currNumber && currNumber !== j ) {
            y = currNumber;
            x = j;
            break;
        }
    }
    return [x,y];
};
