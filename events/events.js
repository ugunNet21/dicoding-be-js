const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat`);
};

myEventEmitter.on("coffee-order", makeCoffee);

myEventEmitter.emit("coffee-rder", { name: "Tubruk" });
