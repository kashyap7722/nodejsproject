const mongoose=require("../config/connect")
const movieSchema=new mongoose.Schema({
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
    price:{
        type:Number,
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
    image:{
        type:String,
        required:true,
    }
})
const movieModel=new mongoose.model("movie",movieSchema)
module.exports=movieModel