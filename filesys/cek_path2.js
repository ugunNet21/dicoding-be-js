const fs = require('fs')

const fileName = './file.txt'

const stats = fs.lstatSync(fileName)
const permissions = stats.mode & fs.constants.R_OK

if(!permissions){
    console.log('file tidak punya izin')
}else{
    console.log('File memiliki izin unutk dibaca')
}