const { log } = require('console')
const path =  require('path')

const absolute = path.resolve(__dirname,'subfolder','content','sample.txt')

console.log(absolute)

const basename= path.basename(absolute)

console.log(basename)


