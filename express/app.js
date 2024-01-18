const express = require('express')
require('./utils/db');
const app=express()
app.use(express.urlencoded({extended:true}))

app.use('/add-product',(req,res,next)=>{
    console.log("First middleware")
   res.send('<form action="product" method="POST"><input type="text" name="title" > <button> submit </button> </form>')
})
app.use('/product',(req,res,next)=>{
    console.log(req.body)
   res.redirect('/')
})

app.use('/',(req,res,next)=>{
    console.log("Second middleware")
    res.send('<h1>Hello Expressjs</h1>')
})
app.listen(3000)



