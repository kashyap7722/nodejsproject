const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/employeemanagment").then(()=>{
    console.log("connected");
}).catch((e)=>{
    console.log(e);
})
module.exports=mongoose