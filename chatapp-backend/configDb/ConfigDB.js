const mongoose = require("mongoose");
const uri = process.env.MONGO_URI
const ConfigDB = async()=>{
    try{
       const connect =  await mongoose.connect(uri,{dbName:"googleUsersChat"});
       console.log("db connection successfull")
    }catch(error){
        console.log(error)
    }
}

module.exports=ConfigDB;