import { AppBar, Toolbar, styled, Box } from "@mui/material";
import DailogLogin from "./account/Dailog";
import Chatdailog from "../chat/Chatdailog";
import { ContextContainer } from "../contextApi/Context";
import { useContext,useEffect, useState } from "react";
import { toast } from "react-toastify";

const Container = styled(Box)`
background-color: white;
height: 100vh;
`;
const ChatHeader = styled(AppBar)`
background-color: gray;
height: 100px;
`;
const LoginHeader = styled(AppBar)`
background-color: gray;
height: 300px;
`;
const Messanger = () => {
  const { logindata } = useContext(ContextContainer);
  // const [status,setstatus] = useState("");
  // useEffect(()=>{
  //     const loginuser  = JSON.parse(localStorage.getItem("logincheck"));
  //     if(loginuser){
  //         setstatus(loginuser)
  //     }
  // })


  return (
    <Container>
      {logindata ? (
        <ChatHeader>
          <Toolbar></Toolbar>
          <Chatdailog />
        </ChatHeader>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <DailogLogin />
        </>
      )}
    </Container>
  );
};

export default Messanger;
