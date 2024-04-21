const mongoose = require("mongoose");
const {Schema} = require("mongoose")

const MessageSchema =  new Schema({
     conversestionId:{
        type:String,
        require:true
     },
     senderId:{
        type:String,
        require:true
     },
     reciverId:{
        type:String,
        require:true
     },
     type:{
        type:String,
        require:true
     },
     text:{
        type:String,
     },
     messageId:{
      type:String,
      required:true,
     }
},
 {
  timestamps:true,
 }
)

const Message = mongoose.model("clientMessages",MessageSchema);
module.exports = Message;