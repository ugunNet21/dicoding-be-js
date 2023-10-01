const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}`);
};

const onBirthday = ({ name }) => {
  birthdayEventListener(name);
};
myEventEmitter.on('Happy birthday', onBirthday)
myEventEmitter.emit("Happy birthday", { name: "Dimas" });
