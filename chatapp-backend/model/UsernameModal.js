 const mongoose = require("mongoose");
 const {Schema} = require("mongoose")

 const usernameSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    senderId:{
        type:String,
        require:true
    }
 })

 const usernamemodal = mongoose.model("username",usernameSchema)
 module.exports = usernamemodal;