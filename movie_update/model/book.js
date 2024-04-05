const mongoose=require("../config/connect")
const bookSchema=new mongoose.Schema({
    person:{
        type:String,
    },
    mobile:{
        type:Number,
    },
    movie:{
        type:String,
    },
    price:{
        type:Number
    },
    seat:{
        type:Number
    },
    date:{
        type:String
    },
    time:{
        type:String
    }

})
const bookModel=new mongoose.model("book",bookSchema)
module.exports=bookModel