const mongoose=require("../config/connect")
const upcomingSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    cast:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
  
    producer:{
        type:String,
        required:true,
    },
    director:{
        type:String,
        required:true, 
    },
    duration:{
        type:String,
        required:true,
    },
    release:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
})
const upcomingModel=new mongoose.model("upcoming",upcomingSchema)
module.exports=upcomingModel