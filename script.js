// 1. Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// 2. SportsCar Constructor
function SportsCar(make, model, topSpeed) {
  // Use .call() to inherit properties from Car
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// 3. Inheritance Setup
// Link SportsCar prototype to Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset the constructor property (otherwise it points to Car)
SportsCar.prototype.constructor = SportsCar;

// Adding method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;