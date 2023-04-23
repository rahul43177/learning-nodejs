//write html inside node js and we can do it 
// we can give anchor tag and any HTML from here 
const express = require('express')
const app = express() //we make it executable 
app.get('',(req,res)=>{
    // console.log("data sent by browser",req.query.name)
    res.send(`
    <h1> Welcome , to home Page </h1>  <a href="/about" >GO to about  </a>
    `)
})

app.get('/about',(req,res)=>{
    res.send(`
    <input type = "text" placeholder = "username" /> 

    <button> Click me  </button>  
    <a href="/" > Go to home page </a>   
    `)
})


app.listen(5000) //app.listen is used for making port
