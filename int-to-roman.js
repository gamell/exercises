/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let digit = 0;
  let i = 0;
  let power = 0;
  let res = '';
  const map = [];
  map[0] = '';
  map[1] = 'I';
  map[5] = 'V';
  map[10] = 'X';
  map[50] = 'L';
  map[100] = 'C';
  map[500] = 'D';
  map[1000] = 'M';
  function getStepDown(num){
      if(num >= 1000) return 1000;
      if(num < 1000 && num >= 500) return 500;
      if(num < 500 && num >= 100) return 100;
      if(num < 100 && num >= 50) return 50;
      if(num < 50 && num >= 10) return 10;
      if(num < 10 && num >= 5) return 5;
      return 1;
  }
  function getStepUp(num){
      if(num >= 500) return 1000;
      if(num < 500 && num >= 100) return 500;
      if(num < 100 && num >= 50) return 100;
      if(num < 50 && num >= 10) return 50;
      if(num < 10 && num >= 5) return 10;
      return 5;
  }
  function calc(num, power){ // num = 8 , power = 10
    const roman = map[num];
    if(typeof roman !== 'undefined') return roman;
    // cannot be reduced to a roman numeral directly
    let stepUp = getStepUp(num);
    let diff = Math.abs(stepUp - num);
    if(diff === power) { // if we are only 1 "step" away to the full roman numeral, we build by subtraction
      return calc(diff, power) + map[stepUp];
    } else { // if we are more than 1 "power" away from the next bigger numeral we go one step down and build the number by addition
      let stepDown = getStepDown(num);
      return map[stepDown] + calc(num-stepDown, power);
    }
  }
  while(num > 0){
    power = Math.pow(10,i);
    digit = (num%10)*power;
    num = Math.floor(num/10);
    res = calc(digit, power) + res;
    i++;
  }
  return res;
};


console.log(intToRoman(11));
