// https://leetcode.com/problems/coin-change/description/

class Solution {
    
    private int[] C;
    
    private int[] seen;
    
    private int numCoins(int amount) {
        if (amount == 0) return 0;
        if (amount < 0) return -1;
        if (seen[amount - 1] != 0) return seen[amount - 1];
        int min = Integer.MAX_VALUE;
        for(int i = 0; i < C.length; i++) { // start with the max coin
            int res = numCoins(amount - C[i]);
            if (res >= 0 && res < min) {
                min = res + 1;
            }
        }
        seen[amount - 1] = min != Integer.MAX_VALUE ? min : -1;
        return seen[amount - 1];
    } 
    
    public int coinChange(int[] coins, int amount) {
        C = coins;
        seen = new int[amount];
        return numCoins(amount);
    }
}