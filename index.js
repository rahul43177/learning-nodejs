const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
const filePath = `${dirPath}/apple.txt`
fs.writeFileSync(filePath,'THis is a simple text')
// ye smaajh nahi aaya 
