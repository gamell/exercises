var findMedianSortedArrays = function(nums1, nums2) {
    var combo = [];
    var length = nums1.length + nums2.length;
    var even = length % 2 === 0;
    var midpoint = even ? length/2 : Math.floor(length/2);
    for(var i = 0; i <= midpoint; i++){
        if(!nums1[0] || nums2[0] <= nums1[0]) combo.push(nums2.shift());
        else if(!nums2[0] || nums1[0] <= nums2[0]) combo.push(nums1.shift());
    }
    var median = even ? (combo[midpoint]+combo[midpoint-1])/2 : combo[midpoint];
    return median;
};

console.log(findMedianSortedArrays([1,3], [2]));
