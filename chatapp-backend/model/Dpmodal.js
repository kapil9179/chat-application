const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const DpSchema  = new Schema({
    filename:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true,
    },
    mimetype:{
        type:String,
        required:true
    },
    path:{
        type:String,
        require:true,
    },
    senderId:{
        type:String,
        required:true,
    }
});

const dpModal = mongoose.model("userdp",DpSchema);
module.exports = dpModal