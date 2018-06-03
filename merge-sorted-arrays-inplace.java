// https://leetcode.com/problems/merge-sorted-array/description/

class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m-1;
        int j = n-1;
        for (int right = m+n-1; right >= 0; right--) {
            if(i >= 0 && j >= 0){
                if(nums1[i] >= nums2[j]) {
                    nums1[right] = nums1[i];
                    i--;
                }  else {
                    nums1[right] = nums2[j];
                    j--;
                }
            } else {
                if(i < 0) {
                    nums1[right] = nums2[j];
                    j--;
                } else {
                    nums1[right] = nums1[i];
                    i--;
                }
            }
        }
    }
}