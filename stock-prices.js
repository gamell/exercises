// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    for (var i = 1; i < prices.length; i++) {
        const curr = prices[i];
        if (curr - min > profit) profit = curr - min;
        if (curr < min) min = curr;
    }
    return profit;
};