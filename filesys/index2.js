// dengan async

const fs = require('fs')
const fileName = 'file.txt'
fs.readFile(fileName, (err, data) =>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})