const express=require("express")
const route=express.Router()
const empregisterModel=require("../model/empreg")
const employeeModel=require("../model/employee")
const fs=require("fs")
const multer=require("multer")

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
try {
    let user=req.body.user;
    let password=req.body.pass;
    let userEmail=await empregisterModel.findOne({email:user})
    if(userEmail.password===password){

        res.render("form")
    }

} catch (error) {
    res.status(400).send("Invalid Credential")
}




})
route.get("/register",(req,res)=>{
    res.render("register")
})
route.post("/register",async(req,res)=>{
   try {
    let user=req.body.user;
    let password=req.body.password;
    let data={
        email:user,
        password:password
    }

    

    const empData=await empregisterModel.insertMany(data)
    res.redirect("back")
   } catch (error) {
    console.log(error);
   }
  })
  route.get("/index",async(req,res)=>{
    let getData=await employeeModel.find({})
    res.render("index",{
      gt:getData
    })
  })
  route.get("/form",(req,res)=>{
    res.render("form")
  })
  route.get("/action",async(req,res)=>{
    let fetchdata=await employeeModel.find({})
res.render("action",{
  fds:fetchdata
})
  })
  route.post("/insert",upload,async(req,res)=>{
    try {
      let image="";
      if(req.file){
        image=req.file.path
      }
      let name=req.body.name;
      let email=req.body.email;
      let mobile=req.body.mobile;
      let age=req.body.age;
      let designation=req.body.designation;
      let salary=req.body.salary

      let data={
        name:name,
        email:email,
        mobile:mobile,
        age:age,
        designation:designation,
        salary:salary,
        image:image
      }
      const empData=await employeeModel.insertMany(data)
      res.redirect("back")

    } catch (error) {
      res.status(400).send("Data Not Inserted...")
    }
  })
route.get("/delete",async(req,res)=>{
  let id=req.query.id
  employeeModel.findById(id).then((record)=>{
    fs.unlink(record.image,(err)=>{
        if (err) throw err;
    })
})

  let deldata=await employeeModel.findByIdAndDelete(id)
  res.redirect("action")
})

route.get("/edit",async(req,res)=>{
  let id=req.query.id;
  let dataEdit=await employeeModel.findById(id)
  res.render("edit",{
    de:dataEdit
  })
})

route.post("/update",upload,async(req,res)=>{
  let image="";
  if(req.file){
    image=req.file.path
  }
  let id=req.body.id;
  await employeeModel.findByIdAndUpdate(id,{
    name:req.body.name,
    email:req.body.email,
    mobile:req.body.mobile,
    age:req.body.age,
    designation:req.body.designation,
    salary:req.body.salary,
    image:image,

  }).then((response)=>{
   return res.redirect("action")
  })
})
module.exports=route