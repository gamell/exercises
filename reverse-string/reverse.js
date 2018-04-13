function reverse(str) {
  return str.split('').reverse().join('');
}

function reverseInPlace(str) {
  str = str.split('');
  let j, aux;
  for(var i = 0; i < Math.trunc(str.length/2); i++) {
    j = str.length - i - 1;
    aux = str[j];
    str[j] = str[i];
    str[i] = aux;
  }
  return str.join('');
}

console.log(reverseInPlace('aqui fa calor'));
