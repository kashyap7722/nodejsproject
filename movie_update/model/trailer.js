const mongoose=require("../config/connect")

const trailerSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    url:{
        type:String
    }
})
const trailerModel=new mongoose.model("trailer",trailerSchema)
module.exports=trailerModel