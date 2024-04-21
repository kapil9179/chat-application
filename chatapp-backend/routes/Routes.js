const express = require("express");
const {createUser,getUsers} = require("../controller/userController")
const {setuserConversestion,getSavedUserConversestion} = require('../controller/ConversestionController')
const {setMessage,getMessage} = require("../controller/MessageController")
const {filehandler,getUserSavedFile} = require("../controller/filecontroller")
const {statusManager,getstatusManager} = require("../controller/StatusController");
const {usernamemanager,getusernamemanager}  = require("../controller/UsernameControlller");
const {Dpmanager,getUserDpManager} = require("../controller/DpController")
const clearChatManager = require("../controller/deleteMessageController")
const Router = express.Router()
const upload = require("../utils/upload")
//  const uploadFileConditionally = require("../utils/checkmessage")

Router.post("/createuser",createUser)
.get("/getuser",getUsers)
.post("/conversestion",setuserConversestion)
.post("/getconversestion",getSavedUserConversestion)
.post("/setmessage/" , setMessage)
.get("/getmessage/:id",getMessage)
.post("/upload/file", upload.single("file") ,filehandler)
.get("/getfile/:id",getUserSavedFile)
.post("/status",statusManager)
.get("/getstatus/:id",getstatusManager)
.post("/setusername",usernamemanager)
.get("/getusername/:id",getusernamemanager)
.post("/setchangedp",upload.single('file'),Dpmanager)
.get("/getdp/:id",getUserDpManager)
.delete("/clearchat",clearChatManager)
module.exports=Router