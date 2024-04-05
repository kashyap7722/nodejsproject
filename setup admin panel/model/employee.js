const { model } = require("mongoose")
const moongoose=require("../connection/connect")
const employeeSchema=new moongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
        message:"Already Exists"
    },
    age:{
        type:Number,
        required:true
    }
})
const employeeModel=new model("employee",employeeSchema)
module.exports=employeeModel