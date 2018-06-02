// https://leetcode.com/problems/pascals-triangle/description/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generateRec = function(numRows) {
    if (numRows === 1) return ([[1]]);
    const prevRows = generateRec(numRows - 1);
    const lastRow = prevRows[prevRows.length - 1];
    let currRow = [];
    for(var i = 0; i < lastRow.length - 1; i++) {
        currRow[i] = lastRow[i] + lastRow[i+1];
    }
    currRow = [1, ...currRow, 1];
    return [...prevRows, currRow];
};

console.log(generateRec(10));

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = [[1]];
  let lastRow = res[0];
  let i = 1;
  while (i < numRows) {
    let lastRow = res[i-1];
    let currRow = [];
    for(var j = 0; j < lastRow.length - 1; j++) {
      currRow[j] = lastRow[j] + lastRow[j+1];
    }
    currRow = [1, ...currRow, 1];
    res = [...res, currRow];
    i++;
  }
  return res
};

console.log(generate(10));