/* Show file List with file system  */
const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'files')
// console.log(dirPath);
// for(let i=0;i<5;i++) {
//     fs.writeFileSync(`hello ${i}.txt`,`a simple text file`)
// }

fs.readdir(dirPath, (err,files)=>{
    console.log(files)
})

