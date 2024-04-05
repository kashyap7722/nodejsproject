const express=require("express")
const bodyparser=require("body-parser")
const path=require("path")

const routeMiddleware=require("./routes/route")
const app=express();
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyparser.urlencoded({extended:true}))
app.use(routeMiddleware)
app.listen(3000)