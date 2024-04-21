const { request } = require("express");
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const fileSchema = new Schema ({
    filename:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
   conversestionid:{
    type:String,
    required:true
   },
   senderId:{
    type:String,
    required:true
   },
   messageId:{
    type:String,
    required:true
   }
},
   {
    timestamps:true
   }
);

const file = mongoose.model("userfiles",fileSchema);
module.exports=file;