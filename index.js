//Express JS 
/*  THis is not that complex , ez pz hai 
express js is an framework of node js 
Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js

RESTful APIs == A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. REST stands for representational state transfer and was created by computer scientist Roy Fielding.

*/

// to install express ==> npm i express or npm install express

const express = require('express')
const app = express() //we make it executable 
app.get('',(req,res)=>{
    console.log("data sent by browser",req.query.name)
    res.send("Hello this is home page")
})

app.get('/about',(req,res)=>{
    res.send("welcome this is about page")
})


app.listen(5000) //app.listen is used for making port
