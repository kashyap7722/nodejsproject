const express=require("express")
const app=express()
const path=require("path")
const route=require("./route/route")
app.set("view engine","ejs")
app.use(express.urlencoded())

app.use("/",express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use(route)

app.listen(2000);