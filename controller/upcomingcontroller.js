const upcomingModel=require("../model/upcoming")
const upcoming=async(req,res)=>{
    res.render("upcoming")
}
const addupcoming=async(req,res)=>{
    let image="";
    if(req.file){
        image=req.file.path
    }
    
    let name=req.body.mname
    let cast=req.body.cast
    let language=req.body.lang
    let gen=req.body.gen
    let producer=req.body.pro
    let director=req.body.dir
    let release=req.body.release
    let duration=req.body.dur

    const moviedata={
        name:name,
        cast:cast,
        language:language,
        genre:gen,
        producer:producer,
        director:director,
        duration:duration,
        release:release,
        image:image
    }
    let data=await upcomingModel.insertMany(moviedata)
    res.redirect("back")

}
let coming=async(req,res)=>{
    let upc=await upcomingModel.find({})

    res.render("coming",{
        up:upc
    })
}

module.exports={
    upcoming,addupcoming,coming
}