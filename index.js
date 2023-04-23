const express = require('express')
const path = require('path')



const app = express()
const publicPath = path.join(__dirname,'public')
app.get('',(req,res)=>{
    res.sendFile(`${publicPath}//index.html`)
})


app.listen(5000)
