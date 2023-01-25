{
  // creates vehicle using object literal
  const Vehicle1 = {
    manufacturer: "Toyota",
    PlateNO: 12345,
    startEngine() {
      console.log("reving engine");
    },
    drive() {
      console.log("driving car...");
    },
  };

  console.log(Vehicle1);

  // creates new vehicle using object literal
  const Vehicle2 = {
    manufacturer: "Ford",
    PlateNO: 13345,
    startEngine() {
      console.log("reving engine");
    },
    drive() {
      console.log("driving car...");
    },
  };

  console.log(Vehicle2);
}

// then ------------------------------------------------------------------------------

// creates factory function
function vehicleFactory(manufacturer, plateNO) {
  return {
    manufacturer,
    plateNO,
    startEngine() {
      console.log("reving engine");
    },
    drive() {
      console.log("driving car...");
    },
  };
}

const Vehicle1 = vehicleFactory("Toyota", 12345);
console.log(Vehicle1);

const Vehicle2 = vehicleFactory("Ford", 13345);
console.log(Vehicle2);
