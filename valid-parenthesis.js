/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    function match(open, close){
        if(
            open === '{' && close === '}' ||
            open === '[' && close === ']' ||
            open === '(' && close === ')'
        ) {
            return true;
        }
        return false;
    }
    let res = true;
    for(let i=0; i<s.length ; i++){
        let c = s[i];
        if(c === '(' || c === '[' || c === '{'){
            stack.push(s[i]);
        } else if(!match(stack.pop(), c)){
            res = false;
            break;
        }
    }
    return (stack.length === 0 && res);
};
