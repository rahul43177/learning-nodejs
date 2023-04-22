// making a simple API 
const http = require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'content':'application\json'})
    res.write({name : 'Rahul Mishra',email : 'rahulmisrha@gmail.com'})
    res.end()
}).listen(5000)
// 