const jwt = require('jsonwebtoken')
const User =require("../util/db")
const auth = async (req,res,next) =>{
    try {
        const token = req.header('Authorization').replace('Bearer ',"")
        const decode = await jwt.verify(token,"key is Venkatesh")
        const user = await User.findOne({_id:decode._id,"tokens.token":token})
        // console.log(decode)
        if(!user)
        throw new Error()
    req.token=token
    req.user=user
    next();
    } catch (error) {
        res.status(404).send(error)
    }

}

module.exports = auth