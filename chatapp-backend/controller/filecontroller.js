const file = require("../model/filemodal");
const url = "http://localhost:7000/";
const filehandler = async (req, res) => {
    // make url
    const makeImageUrl = req.file.path.replace("\\","/");
  if (req.file) {
    if (req.file.size > 1024 * 1024 * 5) {
      return res
        .status(404)
        .send({ message: "file size valid only less then 5 or 5mb" });
    } else {
      if (
        !["image/png", "image/jpg", "application/pdf"].includes(
          req.file.mimetype
        )
      ) {
        return res
          .status(404)
          .send({ message: "only jpg png or pdf format allowed" });
      } else {
        const newfile = new file({
          filename: req.file.originalname,
          size: req.file.size,
          type: req.file.mimetype,
          path: `${url}${makeImageUrl}`,
          conversestionid: req.body.conversestionid,
          senderId:req.body.senderid,
          messageId:req.body.messageId
        });
        try {
          const doc = await newfile.save();
          console.log("saved file successfully");
          return res.status(200).send("saved file successfully");
        } catch (error) {
          console.log("error when save file", error.message);
        }
      }
    }
  } else {
    res.status(404).send({ message: "file not found" });
  }
};

const getUserSavedFile = async (req, res) => {
  if (req.params) {
    const document = await file.find({ conversestionid: req.params.id });
    if (document) {
      return res.status(200).json(document);
    } else {
      return res.status(500).send({ message: "file not found" });
    }
  } else {
    return res.status(500).send({ message: "internal sarver error" });
  }
};

module.exports = { filehandler, getUserSavedFile };
