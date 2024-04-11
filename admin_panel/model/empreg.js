const mongoose=require("../config/connect")
const validator=require("validator")
const bcrypt=require("bcryptjs")
const empSchema=new mongoose.Schema({
    email:{

        type:String,
        required:true,
        unique:true,
        validator(val){
            // isEmail() takes 2 arguments, 1st where user entered data and 2nd if it is wrong then to display error..
            if(!validator.isEmail(val)){
                throw new Error("Email is invalid")
            }
        }
    },
    password:{
        type:String,
        required:true,
        validator(val){
            if(val.length<=3){
                throw new Error("Password length must be atleast 3 characters")
            }
        }
    }
})

const empregisterModel=new mongoose.model("empregister",empSchema)
module.exports=empregisterModel
