// bidirectional thats why accept client response and send clinet res in same piece of code

// store active users
let users = [];

const addActiveUser = (userdata, id) => {
  !users.some((user) => user.sub == userdata.sub) &&
    users.push({ ...userdata, id });
};

const handelConnection = (io) => {
  io.on("connection", (socket) => {
    console.log("connected socekt server successfully");
    try {
      socket.on("adduser", (userdata) => {
         console.log(userdata);
        addActiveUser(userdata, socket.id);
        io.emit("user", users);
      });
    } catch (error) {
      console.log("error ocuur");
    }
  });
};


module.exports = handelConnection;
