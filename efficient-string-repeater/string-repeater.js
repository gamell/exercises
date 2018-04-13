// String.prototype.repeat = function(n) {
//   return new Array(n).fill(this).join(' ');
// }

function repeat(str, n) {
  if (n === 1 || n === 0) return str;
  return (n % 2 !== 0) ?
    str + repeat(str + str, Math.trunc(n/2)) :
    repeat(str + str, n/2);
}

console.log(repeat('hola ', 11));



String.prototype.repeat = function(n, res = '') {
  if (n === 1 || n === 0) return res;
  return (n % 2 !== 0) ?
    this + this.repeat(Math.trunc(n/2), this + this) :
    this.repeat(n/2, this + this);
}

console.log('adeu '.repeat(6));
