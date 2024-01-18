const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    sub:{
        type:Boolean
    },
    age:{
        type:Number,
        required:true,
        integer:true
    }
}
)

module.exports=mongoose.model('User',userSchema)