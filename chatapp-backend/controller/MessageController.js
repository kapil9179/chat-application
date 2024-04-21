 const Message = require("../model/MessageModel");
 const Conversestion = require("../model/ConversestionModal");
 const setMessage = async(req,res)=>{
    try{ 
       //saved user message
      const message  =  new Message(req.body)
      // save  new instance after created
      const document =  await message.save();
        try{
          const update = await Conversestion.findByIdAndUpdate(req.body.conversestionId,{message:req.body.text})
        }catch(error){
          return res.status(500).send({message:"network issue"})
        }
       return res.status(200).send("message and latest message saved successfully");
    }catch(error){
      return res.status(500).send({message:'internal server error'})
    }
 }

 const getMessage = async(req,res)=>{
    try{
     const message =  await Message.find({conversestionId:req.params.id})
      return res.status(200).json(message);
    }catch(error){
       res.status(500).send({message:error.message})
    }
 }
 module.exports={setMessage,getMessage};