/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 1) return ['()'];
    const s = new Set();
    let prev = generateParenthesis(n-1);
    let combo = '';
    while(prev.length > 0){
        combo = prev.pop();
        for(let i = 0; i < combo.length; i++){
            s.add(combo.substr(0,i)+'()'+combo.substr(i));
        }
    }
    return Array.from(s);
};

console.log(generateParenthesis(2));
