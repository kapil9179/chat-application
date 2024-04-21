const dpmodal = require("../model/Dpmodal");
const host = "http://localhost:7000/";

const Dpmanager = async (req, res) => {
  const makeurl = req.file.path.replace("\\", "/");
  const fileurl = `${host}${makeurl}`;
  if (req.file) {
    const document = await dpmodal.findOne({ senderId: req.body.senderId });
    if (document) {
      document.filename = req.file.filename;
      document.size = req.file.size;
      document.mimetype = req.file.mimetype;
      document.path = fileurl;
      document.senderId = req.body.senderId;
      const updateddoc = await document.save();
      if (updateddoc) {
        return res.status(202).json(updateddoc);
      } else {
        return res.status(500).send({ message: "internal server error" });
      }
    } else {
      const doc = new dpmodal({
        filename: req.file.filename,
        size: req.file.size,
        mimetype: req.file.mimetype,
        path: fileurl,                                   
        senderId: req.body.senderId,
      });
      const saveddoc = await doc.save();
      if (saveddoc) {
        return res.status(200).json(saveddoc);
      } else {
        return res.status(500).send("internal server error");
      }
    }
  } else {
    return res.status(404).send({ message: "bad req" });
  }
};

const getUserDpManager = async(req,res)=>{
    if(req.params.id){
       const document = await dpmodal.findOne({senderId:req.params.id})
        if(document){
            return res.status(200).json(document)
        }else{
            return res.status(500).send({message:"internal server error"})
        }
    }else{
        return res.status(404).send({message:"bad request"})
    }
}



module.exports = {Dpmanager,getUserDpManager};
