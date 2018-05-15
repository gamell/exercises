/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    function contains(i, j, initial){
        if(i === haystack.length || j === needle.length) return initial;
        if(haystack[i] === needle[j]) return contains(i+1, j+1, initial);
        return contains(i+1, 0, i+1);
    }
    let idx = contains(0, 0, 0);
    return idx === haystack.length ? -1 : idx;
};

console.log(strStr('helloolaholahelloz', 'hllo'));
