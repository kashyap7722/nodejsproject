const express=require("express")
const route=express();
const registerModel=require("../model/login")
const blogModel=require("../model/blog")
const multer=require("multer")
const cookie=require("cookie-parser")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage }).single("file")

route.get("/",(req,res)=>{
    res.render("login")
})

route.post("/login",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    const userEmail=await registerModel.findOne({email:email})

    if(userEmail.password===password){
        res.render("home")
    }

})
route.get("/register",(req,res)=>{
    res.render("register")
})
route.post("/register",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const data={
        email:email,
        password:password
    }
    const userData=await registerModel.insertMany(data)


    res.redirect("register")
})

route.get("/home",async(req,res)=>{
    let getdata=await blogModel.find({})
    res.render("home",{
        gts:getdata
    })
})
route.get("/delete",async(req,res)=>{
    let id =req.query.id;
    let deleteData=await blogModel.findByIdAndDelete(id)
    res.redirect("manage")
})
route.get("/manage",async(req,res)=>{
    let getdata=await blogModel.find({})

    res.render("manage",{
        gt:getdata
    })
})
route.get("/blog",(req,res)=>{
    res.render("blog");
})
route.post("/insert",upload,async(req,res)=>{
    let image="";
    if(req.file){
        image=req.file.path
    }
    let title=req.body.title;
    let description=req.body.description;
    let date=req.body.date
    let data={
        title:title,
        description:description,
        postdate:date,
        image:image
    }

    let blogdata=await blogModel.insertMany(data)
    res.redirect("blog")
});

route.get("/edit",async(req,res)=>{
    let id=req.query.id;
    let edt=await blogModel.findById(id)

    res.render("edit",{
        ed:edt
    })

})
route.post("/update",upload,async(req,res)=>{
    let image="";
    if(req.file){
        image=req.file.path
    }
    let id=req.body.id;
    blogModel.findByIdAndUpdate(id,{
        title:req.body.title,
        description:req.body.description,
        postdate:req.body.date,
        image:image
    }).then((response)=>{
        return res.redirect("manage")
    })

})
module.exports=route
