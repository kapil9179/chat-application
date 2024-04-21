const statusmodal = require("../model/Statusmodal");
// const statusManager = (req, res) => {
//   if (req.body) {
//     const createdDocumenet = new statusmodal({
//       userstatus: req.body.userstatus,
//       senderId:req.body.senderId
//     });
//     if (createdDocumenet) {
//       const document = createdDocumenet.save();
//       res.status(200).send({ message: "status updated successfully" });
//     } else {
//       res.status(500).send({ message: "error occur created document" });
//     }
//   } else {
//     res.status(404).send({ message: "bad request" });
//   }
// };

// learnig edit concept
const statusManager = async (req, res) => {
  if (req.body) {
    const document = await statusmodal.findOne({ senderId: req.body.senderId });
    if (document) {
       // update present document
      document.userstatus = req.body.userstatus;
         const updateddata =  await document.save();
          return res.status(202).json(updateddata);
    } else {
      const firsttimestatus = new statusmodal(req.body);
      const createddoc = await firsttimestatus.save();
      console.log("created docuemnt",createddoc)
      if (createddoc) {
        return res.status(201).json(createddoc);
      } else {
        return res.status(500).send({ message: "internal server error" });
      }
    }
  } else {
    res.status(404).send({ message: "bad request please share data" });
  }
};

const getstatusManager = async (req, res) => {
  if (req.params.id) {
    const document = await statusmodal.findOne({ senderId: req.params.id });
    if (document) {
      return res.status(200).json(document);
    } else {
      return res.status(500).send({ message: "fetching problem" });
    }
  } else {
    res.status(404).send({ message: "bad request" });
  }
};

module.exports = { statusManager, getstatusManager };
