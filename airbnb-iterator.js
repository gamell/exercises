
var input = [
  [1,2,3],
  [4,5,6],
  [],
  [7,8],
  [9]
];

// function Iterator(input){
//   this.input = input;
//   this.row = 0;
//   this.col = -1;
// }
//
// Iterator.prototype = {
//   hasNext: function(){
//     if(this.col+1 >= this.input[this.row].length){
//        if (this.row+1 >= this.input.length){
//          return false;
//        }
//     };
//     return true;
//   },
//   next: function(){
//     this.col++;
//     if(this.col >= this.input[this.row].length){
//       this.col = 0;
//       this.row++;
//     }
//     if(this.row >= this.input.length){
//       return undefined;
//     }
//
//     let res = this.input[this.row][this.col];
//     if(res === undefined) res = this.next();
//     return res;
//   },
//   remove: function(){
//     let res = this.input[this.row][this.col];
//     this.input[this.row].splice(this.col,1);
//     this.col--;
//     return res;
//   }
// }

///////////////////////////////////////////////////////////////////////////

'use strict';

function makeIterator(m){
  let col = -1;
  let row = 0;
  function hasNext(){
    return !((col+1 >= m[row].length) && (row+1 >= m.length));
  }

  function next(){
    col++;
    if(hasNext()){
      if(col >= m[row].length) {
        col = 0; row++;
      }
      let res = m[row][col];
      if(res === undefined) res = next();
      return res;
    }
    return undefined;
  }

  function remove(){
    let res = m[row][col];
    m[row].splice(col,1);
    col--;
    return res;
  }

  return {
    hasNext,
    next,
    remove
  }
}

// var it = new Iterator(input);
var it = makeIterator(input);
console.log(it.next());
console.log(it.hasNext());

console.log(it.next());
console.log('Deleted: '+it.remove());
console.log(it.next());
console.log(it.next());
console.log(it.hasNext());

console.log(it.next());
console.log(it.hasNext());

console.log(it.next());
console.log(it.next());

console.log(it.next());

console.log(it.next());
console.log(it.hasNext());

console.log(it.next());
