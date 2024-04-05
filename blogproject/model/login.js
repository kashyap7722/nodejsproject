const mongoose=require("../config/connect")
const loginSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const loginModel=new mongoose.model("user",loginSchema)
module.exports=loginModel