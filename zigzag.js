/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const res = new Array(numRows);
    for(let i = 0; i < numRows; i++){ // init array of strings
        res[i] = '';
    }
    let currRow = 0;
    let goingDown = true;
    for(let i = 0; i < s.length; i++){
        res[currRow] += s[i];
        if (goingDown){
            currRow++;
            if(currRow === numRows){ // reached end of ZIG
                if(numRows > 2) {
                    currRow = numRows - 2;
                    goingDown = false;
                } else {
                    currRow = 0;
                }
            }
        } else {
            currRow--;
            if(currRow <= 0){ // reached end of ZAG
                currRow = 0;
                goingDown = true;
            }
        }
    }
    return res.join('');
};
