/*
Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4]
*/

var acum = [];

function flatten(input, acum = []) {
  if (Array.isArray(input)) {
    input.forEach((elem) => flatten(elem, acum));
  } else {
    acum.push(input);
  }
}

flatten([0,'hello',['bye']], acum);

console.log(acum);


// Least recently used cache

class LRU {

  constructor(maxSize) {

    this.cache = {};
    this.hits = {};
    this.maxSize = maxSize;

  }

  _getLeastUsed() {
    const res = Object.entries(this.hits).reduce((acum, [key, value]) => {
      if (value < acum.minValue || acum.minValue === null) {
        return {
          key,
          minValue: value
        }
      }
    }, { key: null, minValue: null});
    return res.key;
  }

  set(key, value) {

    if (this.cache.length > this.maxSize) {
      const least = this._getLeastUsed();
      delete this.hits[least];
      delete this.cache[least];
    }

    this.hits[key] = 0;
    this.cache[key] = value;

  }

  get(key) {
    if (this.cache[key]) {
      this.hits[key] = this.hits[key] ? this.hits[key] + 1 || 1;
      return this.cache[key];
    } else {
      return new Error();
    }
  }

}
