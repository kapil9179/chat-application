const mongoose = require("mongoose")
const {Schema} = require("mongoose");
const userSchema = mongoose.Schema({
     iss:{
        type:String
     },
     azp:{
        type:String
     },
     aud:{
        type:String
     },
     sub:{
        type:String,
        required:true,
     },
     email:{
        type:String,
        unique:true,
        required:true,
     },
     email_verified:{
        type:Boolean,
     },
     nbf:{
        type:Number
     },
     name:{
        type:String,
        required:true,
     },
     picture:{
        type:String,
        required:true,
     },
     jti:{
        type:String,
        required:true,
     }

})

const userModel = mongoose.model("googleAuthenticateUser",userSchema);
module.exports=userModel;