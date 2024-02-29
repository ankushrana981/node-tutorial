const path = require('path')

console.log(path.sep)

const filePath = path.join('./contest','subfolder','file.txt')

console.log(filePath)

const fileName = path.basename(filePath)
console.log(fileName)

const mainPath = path.join(__dirname,'/contest','subfolder','file.txt')
console.log(mainPath)