const fs = require('fs')

const writebleStream = fs.createWriteStream('output.txt')

writebleStream.write('ini baris pertama')
writebleStream.end()