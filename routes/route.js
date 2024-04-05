const express=require("express")
const route=express.Router();
const movieController=require("../controller/moviecontroller")
const bookController=require("../controller/bookcontroller")
const upcomingcontroller=require("../controller/upcomingcontroller")
const trailercontroller=require("../controller/trailercontroller")
const multer=require("multer");
const { upcoming } = require("../controller/upcomingcontroller");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage }).single("file")


route.get("/",movieController.viewlogin)
route.post("/login",movieController.login)
route.get("/home",movieController.home)
route.get("/movie",movieController.movie)
route.post("/insert",upload,movieController.insertMovie)
route.get("/action",movieController.action)
route.get("/delete",movieController.removedata)
route.get("/edit",movieController.editmovie)
route.post("/update",upload,movieController.updateMovie)
route.get("/book",movieController.viewbook)
route.get("/invalid",movieController.invalidlogin)
route.post("/book",bookController.book)
route.get("/order",bookController.findbook)
route.get("/remove",bookController.removeorder)
route.get("/upcoming",upcomingcontroller.upcoming)
route.post("/upcoming",upload,upcomingcontroller.addupcoming)
route.get("/coming",upcomingcontroller.coming)
route.get("/trailer",trailercontroller.trail)
route.get("/viewtrailer",trailercontroller.viewTrailer)

route.post("/trailer",trailercontroller.addTrailer)
module.exports=route