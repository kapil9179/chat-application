import { Box } from "@mui/material";
import { styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../../style/ChatHeader.css";
import { ContextPerson } from "../../contextApi/contextperson";
import { useContext, useLayoutEffect, useState } from "react";
import SearchChatbox from "./SearchChatbox";
import '../../style/ChatHeaderMoreVert.css';
import { ClearChatApi } from "../../service/api";

//import React from 'react';

// css
const Container = styled(Box)`
position: relative;
background-color: #ededed;
  align-items: center;
  display: flex;
`;
const Dp = styled("img")`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin: 5px 0 5px 5px;
`;
const StatusSection = styled(Box)`
 margin:0 0 0 10px;
 & > :nth-of-type(2){
 color:rgb(0, 0, 0, 0.5)
 margin:0 0 5px 0;
 }
`;
const IconSection = styled(Box)`
  margin-left: auto;
  margin-right: 12px;
`;

const Searchicons = styled(SearchIcon)`
 cursor:pointer;
`
function ChatHeader({messageContainer,conversestion}) {
  const { person } = useContext(ContextPerson);
  const [show, setshow] = useState(false);
  const [openMoreVert,setopenMoreVert] = useState(false);

  // clear all chat  using conversestion id which is set when conversestion get conversestion id is common that is saved with every message
  const clearChatHandler = async()=>{
     if(conversestion._id){
      const res =  await ClearChatApi(conversestion._id)
     }else{
      console.log("error occurs when send common _id ",error.message)
     }
   }
   
  return (
    <Container>
      <Dp src={person.picture} alt="dp" />
      <StatusSection>
        <p className="name">{person.name}</p>
        <p>offline</p>
      </StatusSection>
      <IconSection>
        <Searchicons onClick={() => setshow(!show)}/>
        {show ? <SearchChatbox  person = {person} setshow = {setshow} show={show} messageContainer={messageContainer}/> : null}
        <MoreVertIcon onClick={()=>setopenMoreVert(!openMoreVert)} />
         {openMoreVert && 
           <ul className="morevertlist">
              <li onClick={clearChatHandler}>Clear Chat</li>
              <li>Darkmode</li>
              <li>Copy Chat</li>
           </ul>
         }
      </IconSection>
    </Container>
  );
}

export default ChatHeader;
