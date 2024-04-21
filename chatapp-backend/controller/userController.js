const userModel = require("../model/usermodel")

// adduser
 const createUser = async(req,res)=>{
    try{
        const exist = await userModel.findOne({sub:req.body.sub})
        if(exist){
            return res.status(200).json({message:"you are allready ragister"})
        }else{
          const userSave =  new userModel(req.body)
          const doc =  await userSave.save()
          if(doc){
            return res.status(200).send({message:"register successfully"})
          }else{
            return res.status(400).send({message:"bad request"})
          }
        }
    }catch(error){
        return res.status(500).send({message:"internal server error"})
    }
}

// getuser
const getUsers = async(req,res)=>{
    const user = await userModel.find();
    if(user){
       return res.status(200).json(user)
    }else{
     return res.status(500).send({message:"somthing went wrong"})
    }
}

//conversestion messages




module.exports={createUser,getUsers}