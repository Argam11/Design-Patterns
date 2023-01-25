// function
let mySingleton = (function () {
  let instance = null;
  function init() {
    return {
      //list all the methods
      method() {},
    };
  }
  if (instance == null) {
    instance = init();
  }
  return instance;
})();

mySingleton.method();

// class
let instance;
class MySingleton {
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!!");
    }

    instance = this;
  }
  method() {}
}
const mySingletonInstance = new MySingleton();
// or
// const mySingletonInstance = Object.freeze(new MySingleton());

/////////////////////////////////////////////////////////////////////////

{
  class Config {
    constructor() {}
    start() {
      console.log("App has started");
    }
    update() {
      console.log("App has updated");
    }
  }

  const instance = new Config();
  Object.freeze(instance);
}
