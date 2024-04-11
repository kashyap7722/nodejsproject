const mongoose=require("mongoose")
const validator=require("validator")
const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
        validator(val){
            if(val<18){
                throw new Error("age must not be less than 18")
            }
        }
    },
    designation:{
type:String,
required:true
    },
    salary:{
        type:Number,
        required:true
            },
    image:{
        type:String,
        required:true
    }

})
const employeeModel=new mongoose.model("employee",employeeSchema)
module.exports=employeeModel