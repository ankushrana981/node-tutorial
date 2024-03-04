const EvenEmmitter = require("events");

const customerEmitter = new EvenEmmitter();

customerEmitter.on("response", (data, id) => {
  console.log(`data received ${data} with ID ${id}`);
});

customerEmitter.on("response", () => {
  console.log("Some other logic received");
});
customerEmitter.emit("response", "john", 34);
