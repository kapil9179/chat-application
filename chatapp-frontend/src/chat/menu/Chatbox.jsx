import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useContext, useState } from "react";
import { ContextPerson } from "../../contextApi/contextperson";
import { ContextContainer } from "../../contextApi/Context";
import { getConversestion } from "../../service/api";
import { ThemeContext } from "../../contextApi/ThemeContext";


function Chatbox() {
  const { person } = useContext(ContextPerson);
  const { logindata } = useContext(ContextContainer);
  const {theme} = useContext(ThemeContext);
  const [messageContainer,setmessageContainer] = useState([]);
  const [conversestion, setconversestion] = useState({});
  const [allchats,setallchats] = useState([]);

  useEffect(() => {
    const getConversestionDetails = async () => {
      const data = await getConversestion({
        senderId: logindata.sub,
        receiverId: person.sub,
      });
        console.log("data when get conversestion",data);
      data && setconversestion(data);
    };
    if (person.sub) {
      getConversestionDetails();
    }
  }, [person.sub]);

 
  return (
    <div>
      <ChatHeader messageContainer={messageContainer} conversestion={conversestion} />
      <Messages conversestion={conversestion} setmessageContainer={setmessageContainer}/>
    </div>
  );
}

export default Chatbox;
