const target = {
  message1: "hello",
  message2: "everyone",
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy1 = new Proxy(target, handler3);

console.log(proxy1.message1); // hello
console.log(proxy1.message2); // world
