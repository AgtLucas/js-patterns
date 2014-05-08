// A vehicle constructor
function Vehicle(vehicleType) {

  this.vehicleType = vehicleType || 'car';
  this.model = 'default';
  this.license = '0000-000';

}

// Test instance for a basic vehicle
var testInstance = new Vehicle('car');
console.log(testInstance);

// Let's create a new instance of vehicle, to be decorated
var truck = new Vehicle('truck');

truck.setModel = function(modelName) {
  this.modelName = modelName;
};

truck.setColor = function(color) {
  this.color = color;
};

truck.setModel('CAT');
truck.setColor('Black');
