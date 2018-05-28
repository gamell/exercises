// https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let longest = 0;
    let acum = [];
    nums.forEach((num) => {
        if (acum.length === 0 || acum[acum.length - 1] < num) {
            acum.push(num);
            longest = longest < acum.length ? acum.length : longest;
        } else {
            acum = [num];
        }
    }, []);
    return longest;
};
