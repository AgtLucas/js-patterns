// A constructor for defining new Cars
function Car(options) {

  'use strict';

  this.doors = options.doors || 4;
  this.state = options.state || 'Brand new';
  this.color = options.color || 'Black';

}

// Define a skeleton vehicle factory
function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createNewVehicle = function (options) {

  switch (options.vehicleType) {
      case 'car':
        this.vehicleClass = Car;
        break;
      case 'truck':
        this.vehicleClass = Truck;
        break;
  }

  return new this.vehicleClass(options);

}
