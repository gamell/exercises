// https://leetcode.com/problems/ugly-number-ii/description/

class Solution {
    public int nthUglyNumber(int n) {
        int[] dp = new int[n];
        int i2 = 0;
        int i3 = 0;
        int i5 = 0;
        dp[0] = 1;
        for (int i = 1; i < n; i++) {
            int dp2 = dp[i2]*2;
            int dp3 = dp[i3]*3;
            int dp5 = dp[i5]*5;
            dp[i] = Math.min(dp2, Math.min(dp3, dp5));
            if (dp[i] == dp2)  i2++;
            if (dp[i] == dp3)  i3++;
            if (dp[i] == dp5)  i5++;
        }
        return dp[n-1];
    }
}