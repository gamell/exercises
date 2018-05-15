/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let next = null;
    let i = 0;
    function getNext(){
        let num = '';
        while(i < s.length && (s[i] === ' ' || !isNaN(s[i]))){
            if(s[i] !== ' '){ // we increment if not space
                num += s[i];
            }
            i++;
        }
        if (num.length > 0) return parseInt(num);
        // we advanced up to a operator
        else {
          i++;
          return s[i-1];
        }
    }
    while(i < s.length){
        next = getNext();
        if(typeof next === 'number') stack.push(next);
        else if(next === '*'){
            stack.push(stack.pop()*getNext());
        } else if(next === '/'){
            stack.push(Math.trunc(stack.pop()/getNext()));
        }
        else if (next === '+'){
            stack.push(getNext());
        } else if(next === '-'){
            stack.push(-getNext());
        }
    }
    let res = 0;
    while(stack.length > 0){
        res += stack.pop();
    }
    return res;
};

console.log(calculate("1/2"));
