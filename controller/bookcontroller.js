const bookModel=require("../model/book")

const book=async(req,res)=>{
    const data={
        person:req.body.person,
        mobile:req.body.mobile,
        movie:req.body.mname,
        price:req.body.price,
        seat:req.body.seat,
        date:req.body.date,
        time:req.body.time
    }
    const bdata=await bookModel.insertMany(data)
    res.redirect("order")
}
const findbook=async(req,res)=>{
    let fd=await bookModel.find({})
    res.render("order",{
        fds:fd
    })
}
const removeorder=async(req,res)=>{
    let id=req.query.id
    const rem=await bookModel.findByIdAndDelete(id)
    res.redirect("order")
}
module.exports={
    book,findbook,removeorder
}