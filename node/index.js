const express = require('express')
const mongoose =require('mongoose')
const url = 'mongodb://localhost/user'

const app=express()

mongoose.connect(url)
const con = mongoose.connection

con.on('open',() => {
console.log('connected ...')
})
app.use(express.json())
const userRouter=require('./routes/user')
app.use('/user',userRouter)

app.listen(9000, function(){
    console.log('Server started')
})