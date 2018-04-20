class Iterator {

  constructor(arr) {
    this.arr = arr;
    this.i = -1;
  }

  next() {
    this.i = this.i + 1;
    return this.arr[this.i];
  }

  hasNext() {
    return typeof this.arr[this.i + 1]  !== 'undefined';
  }

}


const a = new Iterator([1,2,3,4,5,6]);
console.log(a.hasNext(), a.next(), a.next(), a.next(), a.next(), a.next(), a.next(), a.hasNext(), a.next(), a.next());
