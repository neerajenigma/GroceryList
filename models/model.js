const mongoose=require("mongoose");
const validator=require("validator");

const listSchema=new mongoose.Schema({
    text:{
        type: String,
        required:true   
    }
})

const texts=new mongoose.model("Grocery",listSchema)
module.exports=texts;