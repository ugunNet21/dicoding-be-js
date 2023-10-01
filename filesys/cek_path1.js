const fs = require('fs')
const fileName = './file.txt'

const access = fs.accessSync(fileName, fs.constants.R_OK)
if(!access){
    console.log('path tidak memiliki izin untuk dibaca')
}else{
    console.log('path memiliki izin')
}