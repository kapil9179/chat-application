const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();
const ConfigDB = require("./configDb/ConfigDB");
const cors = require("cors");
const Router = require("./routes/Routes");
const sockethandler = require("./socket/SocketHandler");

const server = express();
//create http instance and wrapp express instance
const httpserver = http.createServer(server);
// creating socket server
const io = socketIo(httpserver, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});
ConfigDB();

// middlewers
// setup development and production enviorment
server.use(
  if(process.env.NODE_ENV === "development"){
  cors({
    origin: "http://localhost:5173",
    methods: ["get", "post", "put", "patch", "delete"],
    credentials: true,
  })else{
   server.use(cors())
}
);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api", Router);
server.use("/holdfile", express.static("holdfile"));

sockethandler(io);
httpserver.listen(process.env.PORT, () => {
  console.log(`server is running on: ${process.env.PORT}`);
});

// io.on("connection", (socket) => {
//   console.log("user connect");
//   socket.on("adduser", (userdata) => {
//        console.log(userdata);
//     try {
//       addactiveuser(userdata, socket.id);
//       io.emit("getuser", users);
//     } catch (error) {
//       console.error("Error in adduser event:", error);
//     }
//   });
// });

// let users = []
//  const addactiveuser = (userdata,socketid)=>{
//     !users.some((user)=>user.sub==userdata)&&users.push({...userdata,socketid});
//  }

// io.engine.on("connection_error", (err) => {
//   console.log(err.req);      // the request object
//   console.log(err.code);     // the error code
//   console.log(err.message);  // the error message
//   console.log(err.context);  // some additional error context
// });
