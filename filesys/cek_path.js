const fs = require('fs')

const fileName = './file.txt'

const exists = fs.existsSync(fileName)
if(!exists){
    console.log('path tidak ada')
}else{
    console.log('path ada')
}
