// creating basic server 
const http = require('http')
// http handles servers request and requirements



// http.createServer((req,res)=>{
//     res.write("<h1>hello this is rahul</h1>")
//     res.end();
// }).listen(4500)

function dataControl(req,res) {
    res.write("This is rahlul mishra")
}
http.createServer(dataControl).listen(4500)


