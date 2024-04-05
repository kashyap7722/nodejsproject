const moongoose=require("mongoose")
moongoose.connect("mongodb://localhost:27017/employeedb").then(()=>console.log("connected")).catch((e)=>{
    console.log(e)
})
module.exports=moongoose