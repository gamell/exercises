m2 = [
    [1,2],
    [3,4]
]

m3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

m4 = [
    [1,  2, 3, 4],
    [5,  6, 7, 8],
    [9, 10,11,12],
    [13,14,15,16]
]

// spiral(m2) => 1 2 4 3
// spiral(m3) => 1 2 3 6 9 8 7 4 5

function spiralRec(m, i, j){
    if(i > Math.floor((m.length-1)/2) || j > Math.floor((m[0].length-1)/2)){
        console.log(`i: ${i} j: ${j}`);
        return [];
    }
    const rows = m.length - i;
    const columns = m[0].length - j;
    let res = [];
    // top row
    for(let k=j; k<columns; k++){
        res.push(m[0][k]);
    }
    // right side
    for(let k=i; k<rows; k++){
        res.push(m[k][columns-1]);
    }
    // bottom
    for(let k=columns-1; k>j; k--){
        res.push(m[rows-1][k]);
    }
    // left side
    for(let k=rows-1; k>i; k--){
        res.push(m[k][0]);
    }
    let rec = spiralRec(m, rows+1, columns+1);
    res = res.concat(rec);
    return res;
}

function spiral(m){
    return spiralRec(m, 0, 0);
}

console.log(spiral(m4));
