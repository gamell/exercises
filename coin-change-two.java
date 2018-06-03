class Solution {
        
    private int numCombos(int[] coins, int amount, int index, HashMap<String, Integer> seen) {
        if (amount == 0) return 1;
        if (index >= coins.length) return 0;
        String key = amount + "-" + index;
        if (seen.containsKey(key)) return seen.get(key);
        int acum = 0;
        int amountWithCoin = 0;
        while (amountWithCoin <= amount) {
            int remaining = amount - amountWithCoin;
            acum += numCombos(coins, remaining, index + 1, seen);
            amountWithCoin += coins[index];
        }
        seen.put(key, acum);
        return acum;
    } 
    
    public int change(int amount, int[] coins) {
        return numCombos(coins, amount, 0, new HashMap<String, Integer>());
    }
}