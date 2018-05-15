function Car(speed){
  this.speed = speed;
}

Car.prototype.accelerate = function(){
  this.speed++;
}

function Plane(speed, altitude){
  this.altitude = altitude;
  Car.call(this, speed);
}

Plane.prototype = Object.create(Car.prototype);
Plane.prototype.constructor = Plane;
Plane.prototype.dive = function(){
  this.altitude--;
}

let plane = new Plane(100,1000);
plane.accelerate();
plane.dive();

console.log(plane.speed);
console.log(plane.altitude);
console.log(plane.hasOwnProperty('accelerate'));
console.log(plane.hasOwnProperty('speed'));
console.log(plane.hasOwnProperty('dive'));
