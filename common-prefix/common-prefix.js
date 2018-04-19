/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr) {
    if (!arr || !Array.isArray(arr) || arr.length === 0) return '';
    let found = false;
    let i = 0;
    let currWord = '';
    const shortestWord = arr.reduce((prev, curr) => curr.length < prev.length ? curr : prev, arr[0]);
    while ( !found && i < shortestWord.length) {
        currWord = i === 0 ? shortestWord : shortestWord.slice(0, -i);
        const matches = arr.filter((word) => word.indexOf(currWord) === 0 );
        console.log(JSON.stringify(matches));
        found = matches.length === arr.length;
        i++;
    }
    return found ? currWord : '';
};


console.log(longestCommonPrefix(["flower","flow","flight"]));
