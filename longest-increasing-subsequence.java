// https://leetcode.com/problems/longest-increasing-subsequence/description/

class Solution {
    
    public int lengthOfLIS(int[] nums) {
        if(nums.length == 0) return 0;
        int[] dp = new int[nums.length];
        dp[0] = 1;
        int res = dp[0];
        for(int i = 1; i < nums.length; i++) {
            int curr = nums[i];
            int max = 0;
            for(int j = 0; j < i; j++) {
                if(nums[j] < curr) {
                    max = Math.max(max, dp[j]);
                }
            }
            dp[i] = max + 1;
            res = Math.max(res, dp[i]);
        }
        return res;
    }
}