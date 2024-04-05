const employeeModel=require("../model/employee")
const express=require("express")
const route=express.Router()

const empData=[]
route.get("/",(req,res)=>{
    res.render("index")
})

route.get("/form",(req,res)=>{
    res.render("form")
})

route.post("/insert",(req,res)=>{
    const empname=req.body.name;
    const empemail=req.body.email;
    const empmobile=req.body.mobile;
    const empage=req.body.age

    const addData=async()=>{
        const employee={
            name:empname,
            email:empemail,
            mobile:empmobile,
            age:empage
        }
        const result=await employeeModel.insertMany([employee])
        empData.push(result)
        res.redirect("form")
    }
addData()


})

route.get("/table",async(req,res)=>{
    let getData=async()=>{
        try {
            const getdt=await employeeModel.find({}).sort({name:-1})
            const count=await employeeModel.find({}).countDocuments()
          


    res.render("table",{
        getData:getdt,cnt:count
    })
            
        } catch (error) {
            
        }
    }
     getData()   
})


route.get("/editdata",(req,res)=>{
    let id = req.query.id;

    employeeModel.findById(id).then((response)=>{
        return res.render('edit',{response})
    })
})

route.post("/updatedata",(req,res)=>{
    let id = req.body.id;
    employeeModel.findByIdAndUpdate(id,{
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        age:req.body.age
    }).then((response)=>{
        return res.redirect('table');
    })
})

route.get("/deletedata",(req,res)=>{
    let id = req.query.id;

    employeeModel.findByIdAndDelete(id).then((data)=>{
        return res.redirect('table');
    }).catch((err)=>{
        console.log("err");
        return false;
    })


})
module.exports=route