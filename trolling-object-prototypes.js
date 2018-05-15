'use strict';

// Define example vars

    let o = {one: 1, two: 2, three: 3};
    let array = [1,2,3];
    let f = function(i){ return i+1; }

// Add stuff to Object prototype

    Object.prototype.print = function(){
      console.log(this.toString());
    };

// Let's test it out

    console.log('\n//// None of the variables have \'print\' as ownProperty, as it comes directly from Object, no variable/object can have it as ownProperty, ever (Object is the highest in the chain of prototypes) \n');

    console.log(`o.hasOwnProperty('print'): ${o.hasOwnProperty('print')}`);
    console.log(`array.hasOwnProperty('print'): ${array.hasOwnProperty('print')}`);
    console.log(`f.hasOwnProperty('print'): ${f.hasOwnProperty('print')}`);

    console.log('\n//// Let\'s use .print() \n');

    // Prototype chain: f ---> Function.prototype ---> Object.prototype ---> null
    o.print(); // [Object object]
    array.print(); // it works as Array inherits from Object prototype
    f.print(); // it works too!

// Fucking around with already existing methods in the prototype - Bad practice!

    let trollingToString = function(){
      // call the default Object.prototype.toString which only returns [Object type] and append trolling
      return Object.prototype.toString.call(this) + ' u mad? (trollface)';
    }

    // Override Array and Funciton toString prototypes

    Array.prototype.toString = trollingToString;
    Function.prototype.toString = trollingToString;

    console.log('\n//// Array and Function .toString() is screwed \n');

    o.print(); // not affected os Object.prototype.toString is not overriden yet
    f.print(); // f not affected because Function.prototype.toString() overrides Object.prototype.toString()
    array.print(); // array not affected because Array.prototype.toString() overrides Object.prototype.toString()

// Now what happens if we overwrite even the default Object.prototype.toString ?

    let shrugToString = function() { return  `¯\\_(ツ)_/¯`; };

    Object.prototype.toString = shrugToString;
    // Object.defineProperty(Object.prototype, 'toString', {value: shrugToString}); // equivalent to the above, provides more fine grained control over the overwrite

    console.log('\n//// All of them screwed. U mad? \n');

    f.print(); // even after f has been created, it's still affected by changes to Function prototype
    array.print(); // same for Array
    o.print();
