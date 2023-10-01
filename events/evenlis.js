const {EventEmitter} = require('events')

const myEventEmitter = new EventEmitter()

const makeCoffee = (name)=> {
    console.log(`KOpi ${name} telah dibuat`)


}
const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat`)

}

const oncoffeeOrderListener = ({ name, price}) =>{
    makeCoffee(name)
    makeBill(price)
}

myEventEmitter.on('coffee-order', oncoffeeOrderListener)
myEventEmitter.emit('coffee-order', {name: 'Tubruk', price: 15000})

