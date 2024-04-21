import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../../service/api";
import Conversestionusers from "./Conversestionusers";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ContextContainer } from "../../contextApi/Context";

const StyleDivider = styled(Divider)`
  margin-left: 40px;
`;

const Container = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;
const ParaGraphStyle = styled.p`
  margin-left: 8px;
`;

function Conversestion({ text }) {
  const { logindata, socket,setActiveUser,activeUser} = useContext(ContextContainer);
  const [user, setuser] = useState([]);

   // manage setactive user which is come from socket backend

  const handelnewuser = (user)=>{
     console.log("this is connected user",user)
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        const FilteredData = response && response.filter((user) =>
          user.name.toLowerCase().includes(text.toLowerCase())
        );
        setuser(FilteredData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [text]);

 
  useEffect(() => {
    try {
      if (socket.current && logindata) {
        socket.current.emit("adduser", logindata);
        const handler = (users) => {
          console.log("active user ji", users);
          // Check if users has actually changed before calling setActiveUser
          if (JSON.stringify(users) !== JSON.stringify(activeUser)) {
            setActiveUser(users);
          }
        };
        socket.current.on("user", handler);
  
        // Cleanup function
        return () => {
          socket.current.off("user", handler);
        };
      }
    } catch (error) {
      console.error("Error in socket event handling:", error);
    }
  }, [socket, logindata, activeUser]); // Note that activeUser is now a dependency
  
  
  
  return (
    <Container>
      {
        user && user.length > 0 ? (
          user.map((user) => (
            <React.Fragment key={user.sub}>
              {user.sub !== logindata.sub && (
                <Conversestionusers key={user.sub} user={user} />
              )}
              <StyleDivider />
            </React.Fragment>
          ))
        ) : (
          <ParaGraphStyle>User not found!!</ParaGraphStyle>
        ) // yeh hai "else" part
      }
    </Container>
  );
}

export default Conversestion;

// useEffect(() => {
//   try {
//     socket.current.emit("adduser", logindata);
//     const handler = (users) => {
//        console.log("active user ji",users)
//       setActiveUser(users);
//     };
//     socket.current.on("user", handler);

//     // Cleanup function
//     return () => {
//       socket.current.off("user", handler);
//     };
//   } catch (error) {
//     console.error("Error in socket event handling:", error);
//   }
// }, [logindata]);


// useEffect(() => {
//   try {
//     if (socket.current && logindata) {
//       socket.current.emit("adduser", logindata);
  
//       socket.current.on("user",handelnewuser);

//       // Cleanup function
//       return () => {
//         socket.current.off("user", handelnewuser);
//       };
//     }
//   } catch (error) {
//     console.error("Error in socket event handling:", error);
//   }
// }, [logindata]);