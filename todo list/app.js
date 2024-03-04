const express=require("express")
const app=express()

app.set("view engine","ejs")
app.use(express.urlencoded())
var productdetails=[];
app.get("/",(req,res)=>{
    res.render("login")
})
app.post("/login",(req,res)=>{
    let user=req.body.user;
    let pass=req.body.pwd;

    if(user==="admin" && pass==="admin"){
        res.redirect("home")
    }
    else{
        res.redirect("invalid")
    }

})
app.get("/invalid",(req,res)=>{
    res.render("invalid")
})
app.get("/home",(req,res)=>{
    
    res.render("home")
})
app.get("/view",(req,res)=>{
    res.render("view",{
        pro:productdetails
    })
})
app.post("/insert",(req,res)=>{

    let id=req.body.id;
    let product=req.body.product
    let price=req.body.price
    let quantity=req.body.quan
    let discount=req.body.disc
    let total=price*quantity
    let pay=(total)-(total*discount)/100
    let time=new Date();

    let prodata={
        id:id,
        product:product,
        price:price,
        quantity:quantity,
        discount:discount,
        total:total,   
        pay:pay,
        time:time
    }
    productdetails.push(prodata)
    res.redirect("back")

})

app.get("/delete",(req,res)=>{
    let productid=req.query.id

    let del=productdetails.filter((val)=>{
        return val.id!=productid
    })
    productdetails=del
    res.redirect("back")
})

app.get("/edit",(req,res)=>{
    let id=req.query.id

    let data=productdetails.filter((val)=>{
        return val.id=id
    })
    res.render("edit",{
        edit:productdetails[0]
    })
})

app.post("/update",(req,res)=>{
    let id=req.body.id

    let data=productdetails.filter((val)=>{
        if(val.id==id){
            val.product=req.body.product

            val.price=req.body.price
            val.quantity=req.body.quan
            val.discount=req.body.disc
            val.total=val.price*val.quantity
            val.pay=(val.total)-(val.total*val.discount)/100;
            val.time=new Date();
        }
        return val
    
    })
    productdetails=data
    return res.redirect("view")

})
// app.get("/product",(req,res)=>{
//     res.render("product",{
//         pros:productdetails
//     })
// })
app.listen(5000)