const path = require('path')

console.log(path.sep)

// path.join simply concatonates all the parameters from left to right
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath);
console.log(base)

// path.resolve would take the right most /a as the root path and concatonate anything without / as a directory
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)