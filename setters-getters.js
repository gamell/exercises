// setters & getters

// By setting the constructor function

function Thing(){
  this.dict = {};
  this.set = function(key, val){
    this.dict[key] = val;
  }
  this.get = function(key){
    return this.dict[key];
  }
}

var thing = new Thing();

thing.set('x', 1);
thing.set('y', 'string');

console.log(thing.get('x'));
console.log(thing.get('y'));

// By using prototype

function ThingTwo(){};

ThingTwo.prototype = {
  dict: {},
  set: function(key, value){
      this.dict[key] = value;
  },
  get: function(key){
    return this.dict[key];
  }
}

var thing2 = new ThingTwo();

thing2.set('x', 'blabla');
console.log(thing2.get('x'));

// By using Object.create

var thing3 = Object.create(ThingTwo.prototype);
thing3.set('x', 'thingz!');
console.log(thing3.get('x'));
