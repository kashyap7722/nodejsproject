const trailerModel=require("../model/trailer")
const addTrailer=async(req,res)=>{
    const data={
        name:req.body.mname,
        url:req.body.url
    }
    const moviedata=await trailerModel.insertMany(data)
    res.redirect("back")
}
const trail=(req,res)=>{
    res.render("trailer")
}
const viewTrailer=async(req,res)=>{
    const vt=await trailerModel.find({})
    res.render("viewtrailer",{
        vts:vt
    })
}
module.exports={
    addTrailer,trail,viewTrailer
}
