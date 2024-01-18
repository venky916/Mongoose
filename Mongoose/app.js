const express = require('express')
require('./util/db')
const User=require('./util/db')
const auth =require('./middleware/auth')
const app=express()
app.use(express.json())
app.listen(3000)


app.post('/user',async (req,res)=>{
    const user=new User(req.body)
    try {
        // await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})
        // console.log(res)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


app.get('/user/me',auth,async (req,res)=>{
    try {
    //    const user = await User.find({})
    //    if(!user)
    //    return res.status(404).send()
    //    res.send(user).statusCode
    res.status(200).send(req.user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.post("/user/logout",auth,async (req,res)=>{
    try {
        // req.user.tokens= req.user.tokens.filter(token=>token.token != req.token)
        req.user.tokens=[]
        console.log(req.tokens)
        await req.user.save()
        res.status(200).send(req.user)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/user/:id',async (req,res)=>{
    console.log(req.params)
    try {
       const user = await User.findById(req.params.id)
       if(!user)
       return res.status(404).send()
       res.send(user).statusCode
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.patch('/user/:id',async (req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!user)
        return res.status(404).send()
        res.send(user).statusCode
     } catch (error) {
         res.status(500).send(error.message)
     }
})

app.post('/user/login',async (req,res)=>{
    try {
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token= await user.generateAuthToken()
        // console.log(user,token)
        res.status(200).send({user,token})
    } catch (error) {
        res.status(400).send(error)
    }
})

