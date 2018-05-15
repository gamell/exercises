'use strict';

// Old school prototypical inheritance

    function Vehicle(wheels, passengers, type){ // constructor function;
      this.wheels = wheels;
      this.passengers = passengers;
      this.type = type;
    };

    Vehicle.prototype = {
      removeWheel: function() { this.wheels--; },
      addWheel: function() { this.wheels++; },
      randomPassengers: function() { this.passengers = Math.trunc(Math.random()*500); },
      print: function() {
        console.log(`Vehicle: { wheels: ${this.wheels}, passengers: ${this.passengers}, type: ${this.type} }`);
      },
      brokenPrint: () => { // THIS WILL NOT WORK BECAUSE `this` IS RESOLVED DIFFERENTLY IN ARROW FUNCTIONS!
        console.log(`(won't work) Vehicle: { wheels: ${this.wheels}, passengers: ${this.passengers}, type: ${this.type} }`);
      }
    }

    let b747 = new Vehicle(12,430,'airplane');

    b747.print();
    b747.brokenPrint();
    console.log(Object.getPrototypeOf(b747));

    b747.removeWheel();
    b747.randomPassengers();
    b747.print();

    // let's define Car which inherits from Vehicle

    function Car(wheels, passengers, type, brand){ // extend the constructor
      Vehicle.call(this, wheels, passengers, type); // call super, we need to pass `this` so vehicle knows where to attach the wheels, passengers, etc.
      this.brand = brand;
    }

    // Car.prototype = Vehicle.prototype; // if we did it like this, we would be changing Vehicle.prototype as it's it's not copied, Vehicle and Car will be pointing to the SAME prototype.
    Car.prototype = Object.assign({}, Vehicle.prototype);
    Car.prototype.print = function(){ // override print() method
      console.log(`Car: { wheels: ${this.wheels}, passengers: ${this.passengers}, type: ${this.type}, brand: ${this.brand} }`);
    }
    Car.prototype.randomPassengers = function(){ // override randomPassengers() method
      Vehicle.prototype.randomPassengers.call(this); // call "super"
      this.passengers = this.passengers%4;
    }

    let mini = new Car(4,4,'car','mini');

    console.log('\nmini inherits all the functionality from Vehicle plus overrides: \n');
    mini.print();
    mini.removeWheel();
    mini.removeWheel();
    mini.randomPassengers();
    mini.print();
    console.log('\nb747 & Vehicle prototype not affected\n');
    b747.randomPassengers();
    b747.print();

// Slightly easier overwriting the print prototype functions directly

    // Let's create Motorcycle which inherits from Vehicle

    function Motorcycle(wheels, passengers, type, maxSpeed){
        Vehicle.call(this, wheels, passengers, type);
        this.maxSpeed = maxSpeed;
    }

    Motorcycle.prototype = Object.assign(Vehicle.prototype, {
        print: function(){
          console.log(`Motorcycle: { wheels: ${this.wheels}, passengers: ${this.passengers}, type: ${this.type}, maxSpeed: ${this.maxSpeed} }`);
        }
    });

    let ducati = new Motorcycle(2,2,'bike',300);
    ducati.print();

// Same thing in ES6

class Boat extends Vehicle {
  constructor(wheels, passengers, type, flag){
    super(wheels, passengers, type);
    this.flag = flag;
  }

  print(){
    console.log(`Boat: { wheels: ${this.wheels}, passengers: ${this.passengers}, type: ${this.type}, flag: ${this.flag} }`);
  }
}

let titanic = new Boat(0, 1500, 'boat', 'UK');

titanic.print();
