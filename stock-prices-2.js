// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let totalProfit = 0;
    let profit = 0;
    let last = prices[0];
    for (var i = 1; i < prices.length; i++) {
        const curr = prices[i];
        if (curr - min > profit) {
            profit = curr - min;
        }
        if (curr < min) min = curr;
        if (curr < last) { // close position
            totalProfit += profit;
            profit = 0;
            min = curr;
        }
        last = curr;
    }
    return totalProfit + profit;
};