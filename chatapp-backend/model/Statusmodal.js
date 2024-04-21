 const mongoose = require("mongoose");
 const {Schema} = require("mongoose");

 const statusSchema = new Schema({
     userstatus:{
        type:String,
        required:true
     },
     senderId:{
        type:String,
        required:true
     }
 })
  const  statusmodal = mongoose.model("userstatus",statusSchema)
 module.exports =  statusmodal;