const { EventEmitter} = require('events');
const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat`);


};

const makeBill = ({ price }) =>{
    console.log(`Bill sebesar ${price} telah dibuat`);

}
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);

myEventEmitter.emit('coffee-order', { name : 'Tubruk', price: 2000});