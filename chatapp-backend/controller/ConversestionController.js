const Conversestion = require("../model/ConversestionModal");
const setuserConversestion = async (req, res) => { 
  const { receiverId, senderId } = req.body;
  const exist = await Conversestion.findOne({
    member: { $all: [receiverId, senderId] },
  });
  if (exist) {
    return res.status(200).send({ message: "chat already exist" });
     
  } else {
      const SavedUser = new Conversestion({
        member: [senderId, receiverId],
      });
      try{
        const doc = await SavedUser.save();
          //console.log("saved document",doc)
      res.status(200).send({ message: "conversestion saved successfully" });
      }catch(error){
       console.log(error.message)
      }
  }
};
 
const getSavedUserConversestion = async(req, res) => {
  const  {senderId,receiverId} = req.body;
  try {
    const document = await Conversestion.findOne({
      member: { $all: [senderId,receiverId] },
    });
      if(document===null){
         console.log("aabhi conversestion create nahi hua hain")
      }else{
        return res.status(200).json(document);
      }
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};

module.exports = {setuserConversestion, getSavedUserConversestion };
