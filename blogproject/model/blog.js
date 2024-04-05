const mongoose=require("../config/connect")
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postdate:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true 
    }
})
const blogModel=new mongoose.model("blog",blogSchema)
module.exports=blogModel