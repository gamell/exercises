// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {

    const area = (left, right) => (right - left) * (Math.min(arr[right], arr[left]));
    let left = 0;
    let right = arr.length - 1;
    let max = area(left, right);

    while (left < right) {
        max = Math.max(area(left, right), max);
        if (arr[left] < arr[right]) {
           left++
        } else {
            right--;
        }
    }

    return max;

};
