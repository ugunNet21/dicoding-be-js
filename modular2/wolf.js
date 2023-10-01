class Wolf {
    constructor(){
        this.strength = Math.floor(Math.random() * 100)
    }

    howl(){
        console.log('owoooooo!')
    }
}

module.exports = Wolf