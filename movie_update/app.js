const express=require("express")
const app=express()
const path=require("path")
const route=require("./routes/route")
app.set("view engine","ejs")
app.use(express.urlencoded())
app.use(route)
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.listen(7000)