const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/mvcmovie").then(()=>{
    console.log("connected");
}).catch((e)=>{
    console.log(e);
})
module.exports=mongoose