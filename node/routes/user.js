const express = require('express')
const router=express.Router()
const User=require('../models/user')

router.get('/',async (req,res)=>{
    try{
        const users= await User.find()
        res.json(users)
    }catch(err){
        res.send("ERROR"+err)
    }  
})

router.post('/',async (req,res)=>{
    const user = new User({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub,
        age:req.body.age,
    })

    try{
        const result= await user.save()
        res.json(result)

    }catch(error){
        res.send("ERRor"+error)
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const user= await User.findById(req.params.id)
        res.json(user)
    }catch(err){
        res.send("ERROR"+err)
    }  
})
router.patch('/:id',async (req,res)=>{
    try{
        const user= await User.findById(req.params.id)
        user.sub=req.body.sub
        const newval= await user.save()
        res.json(user)
    }catch(err){
        res.send("ERROR"+err)
    }  
})
module.exports=router