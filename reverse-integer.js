/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = [];
    x = (""+x).split("");
    if(x[0] === '-') res.push(x.shift());
    while(x.length > 0){
        res.push(x.pop());
    }
    res = parseInt(res.join(''));
    return (isNaN(res) || res > 2147483647 || res < -2147483648) ? 0 : res;
};
