const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const ConversestionSchema = new Schema({
    member:{
        type:Array
    },
    message:{
        type:String
    }},
   {
    timestamps:true,
   }
);

const Conversestion = mongoose.model("conversestions", ConversestionSchema);
module.exports = Conversestion;