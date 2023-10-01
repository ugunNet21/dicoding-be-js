const fs = require('fs')
const fileName = './file.txt'

const data = fs.readFileSync(fileName)
const tasks = data.split('\n')

console.log('Di hari minggu saya akan')

tasks.foreach((task) =>{
    console.log(` ${task}`)
})