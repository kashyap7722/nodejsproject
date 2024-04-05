const path=require("path")
const movieModel=require("../model/movie")
const bookModel=require("../model/book")
const fs=require("fs")
const viewlogin=(req,res)=>{
    res.render("login")
}
const login=(req,res)=>{
    let user=req.body.user
    let password=req.body.pwd

    if(user==="admin" && password==="admin"){
        res.redirect("movie")

    }
    else if(user==="guest" && password==="guest"){
        res.redirect("home")

    }else{
        res.redirect("invalid")
    }
}
const home=async(req,res)=>{
    let data=await movieModel.find({})

    res.render("home",{
        md:data
    })
}

const movie=(req,res)=>{
    res.render("movie")
}
const insertMovie=async(req,res)=>{
    let image="";
    if(req.file){
        image=req.file.path
    }
    
    let name=req.body.mname
    let cast=req.body.cast
    let language=req.body.lang
    let gen=req.body.gen
    let price=req.body.price
    let producer=req.body.pro
    let director=req.body.dir
    let duration=req.body.dur

    const moviedata={
        name:name,
        cast:cast,
        language:language,
        genre:gen,
        price:price,
        producer:producer,
        director:director,
        duration:duration,
        image:image
    }
    let data=await movieModel.insertMany(moviedata)
    res.redirect("back")



}
const action=async(req,res)=>{
    const viewdata=await movieModel.find({})
    res.render("action",{
        data:viewdata
    })
}

const removedata=async(req,res)=>{
    let id=req.query.id

    movieModel.findById(id).then((record)=>{
        fs.unlink(record.image,(err)=>{
            if(err) throw err;
        })
    })
    let deletedata=await movieModel.findByIdAndDelete(id)
    res.redirect("action")
}
const editmovie=async(req,res)=>{
    let id=req.query.id
    let editdata=await movieModel.findById(id)
    res.render("edit",{
        ed:editdata
    })
}
const updateMovie=async(req,res)=>{
   
    let image=""
    if(req.file){
        image=req.file.path
    }
    let id=req.body.id
    movieModel.findById(id).then((record)=>{
        fs.unlink(record.image,(err)=>{
            if(err)throw err;
        })
    })
    movieModel.findByIdAndUpdate(id,{
        name:req.body.mname,
        cast:req.body.cast,
        language:req.body.lang,
        genre:req.body.gen,
        price:req.body.price,
        producer:req.body.pro,
        director:req.body.dir,
        duration:req.body.dur,
        image:image
    }).then((response)=>{
      return res.redirect("action")
    })


}
const viewbook=async(req,res)=>{
    let id=req.query.id;
    let viewmovie=await movieModel.findById(id)

    res.render("book",{
        mv:viewmovie
    })
}

const invalidlogin=(req,res)=>{
    res.render("loginerror")
}
const vieworder=async(req,res)=>{
    const bdata=await bookModel.find({})
    res.render("order",{
        bd:bdata
    })
}
module.exports={
    viewlogin,login,home,movie,insertMovie,action,removedata,editmovie,updateMovie,viewbook,invalidlogin,vieworder
}