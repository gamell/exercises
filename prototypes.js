var computer = {
  screen: 'high res',
  cpu: 2.5,
  keyboard: true
};

var macbook = Object.create(computer);

console.log(macbook.screen);
macbook.screen = 'low res';
console.log(macbook.screen);
console.log(computer.screen);

console.log('-------------------------');

const Computer = function constructor(screen){
  this.screen = screen;
}
Computer.prototype = {
  screen: 'high res',
  cpu: 1,
  increaseCpu: function(){
    this.cpu++;
  }
};

let iMac = new Computer('big');
let laptop = new Computer('tiny');

console.log(iMac.screen);
console.log(iMac.cpu);
iMac.increaseCpu();
iMac.screen = 'small';
console.log(iMac.screen);
console.log(iMac.cpu);

console.log('---------------');

var a = {a: 123};
var b = Object.create(a);
b.b = 456;
console.log(b.a);
console.log(b.hasOwnProperty('a'));
console.log(b.hasOwnProperty('b'));
b.a = 0;
console.log(b.a);
console.log(b.hasOwnProperty('a'));
console.log(a);
