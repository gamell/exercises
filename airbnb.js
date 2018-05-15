// implementation (solution)

function Model(data){
  this.data = data;
  this.listeners = {};

  this.trigger = function(event, cbArgs){
    let listenersArr = this.listeners[event];
    if(Array.isArray(listenersArr)){
      listenersArr.forEach(fn => fn.apply(this, cbArgs));
    }
  }

  this.setKeyValue = function(key, value){
    this.trigger('change', [key, this.data[key], value]);
    this.trigger(`change:${key}`, [this.data[key], value]);
    this.data[key] = value;
  };

  this.setObject = function(obj){
    let prevValues = {};
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        prevValues[key] = this.data[key];
        this.trigger(`change:${key}`, [this.data[key], obj[key]]);
        this.data[key] = obj[key];
      }
    }
    this.trigger('change', [null, prevValues, obj]);
    console.log(JSON.stringify(this.data));
  }

  this.set = function(keyOrObject, value){
    if(typeof keyOrObject === 'string'){
      this.setKeyValue(keyOrObject, value);
    } else { // object
      this.setObject(keyOrObject);
    }
  };
  this.get = function(key){
    return this.data[key];
  };
  this.on = function(event, cb){
    if(Array.isArray(this.listeners[event])){
      this.listeners[event].push(cb);
    } else {
      this.listeners[event] = [cb];
    }
  }
}


// specification

var user = new Model({
  first: 'John',
  last: 'Doe',
});

console.log(user.get('first')); // John

user.set('first', 'James');

console.log(user.get('first')); // James

user.on('change', function (key, oldValue, newValue) {
  console.log('change', key, oldValue, newValue);
});

user.on('change:first', function (oldValue, newValue) {
  console.log('change:first', oldValue, newValue);
});


user.set('last', 'Smith');
// 'change', 'last', 'Doe', 'Smith'

user.set('first', 'Jack');
// 'change', 'first', 'James', 'Jack'
// 'change:first', 'James', 'Jack'

user.on('change:eyeColor', function (oldValue, newValue) {
  console.log('change:eyeColor', oldValue, newValue);
});

user.on('change:age', function (oldValue, newValue) {
  console.log('change:age', oldValue, newValue);
});

user.set({
  eyeColor: 'brown',
  age: 21,
});
// 'change', null, { eyeColor: undefined, age: undefined }, { eyeColor: 'brown', age: 21 }
// 'change:eyeColor', undefined, brown
// 'change:age', undefined, 21
