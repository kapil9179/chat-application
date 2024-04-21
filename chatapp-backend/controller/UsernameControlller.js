const usernamemodal = require("../model/UsernameModal")

const usernamemanager = async(req,res)=>{
    if(req.body){
       const document = await usernamemodal.findOne({senderId:req.body.senderId});
       if(document){
         document.username = req.body.username
         const updateddocument = await document.save();
           console.log("this is updateddocument",updateddocument)
         return res.status(201).json(updateddocument)
       }else{
          const createdDocument =  new usernamemodal(req.body);
           const savedDocument = await createdDocument.save();
           console.log("this is saveddocument",savedDocument);
           if(savedDocument){
            return res.status(202).json(savedDocument)
           }else{
             return res.status(500).send({message:"internal server error"})
           }
       }
    }else{
        return res.status(500).send({message:"internal server error"})
    }
}

const getusernamemanager = async(req,res)=>{
  if(req.params){
     const document =  await usernamemodal.findOne({senderId:req.params.id});
     if(document){
       return res.status(200).json(document)
     }else{
      return res.status(500).send({message:"internal server error"})
     }
  }else{
    return res.status(500).send({message:"internal server error"})
  }
}

module.exports = {usernamemanager,getusernamemanager}