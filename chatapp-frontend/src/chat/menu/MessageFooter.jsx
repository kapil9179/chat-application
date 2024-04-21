import React, { useContext, useEffect, useState } from "react";
import { Box, styled, TextareaAutosize } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { ContextContainer } from "../../contextApi/Context";
import { ContextPerson } from "../../contextApi/contextperson";
import { newMessage } from "../../service/api";
import { uploadfile } from "../../service/api";
import SendIcon from "@mui/icons-material/Send";
import ShowEmoji from "./ShowEmoji";
import {v4 as uuidv4} from "uuid"

//css
const Container = styled(Box)`
  width: 100%;
  height: 50px;
  background-color: #ededed;
  display: flex;
  align-items: center;
  padding: 10px;
  & > * {
    margin-left: 12px;
  }
`;
const InputContainer = styled(Box)`
  background-color: #ffffff;
  border-radius: 25px;
  width: calc(100% - 110px);
  border: 1px solid #ccc;
`;
const InputContent = styled(TextareaAutosize)`
  font-size: 15px;
  padding: 8px;
  color: black;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
`;
const ClipIcon = styled(AttachFileOutlinedIcon)`
  transform: rotate(45deg);
`;
const SpeechIcon = styled(MicOutlinedIcon)`
  width: 35px;
  height: 35px;
  margin-left: 8px;
  background-color: gray;
  border-radius: 50px;
  color: white;
`;

const SendIcons = styled(SendIcon)`
  width: 35px;
  height: 35px;
  margin-left: 8px;
  background-color: gray;
  border-radius: 50px;
  color: white;
  font-size: small;
  padding: 3px;
`;

function MessageFooter({ conversestion, setlivechange, livechange,filesaved,setfilesaved }) {
  const { logindata } = useContext(ContextContainer);
  const { person } = useContext(ContextPerson);
  const [usertext, setusertext] = useState("");
  const [file, setfile] = useState(null); // initial value when we assign null react handel proper but assign empty object consider true run useeffect when component didmount
  const [checkOpenEmoji,setCheckOpenEmoji] = useState(false)
  const sendMessage = async () => {
    let message = {};
    if (!file) {
      message = {
        senderId: logindata.sub,
        reciverId: person.sub,
        conversestionId: conversestion._id,
        type: "text",
        text: usertext,
        messageId:uuidv4()
      };
      const res = await newMessage(message);
      setusertext("");
      setlivechange(!livechange);
    } else {
      let formData = new FormData();
      formData.append("file", file);
      formData.append("conversestionid", conversestion._id);
      formData.append("senderid",logindata.sub);
      formData.append("messageId",uuidv4())
      try {
        const res = await uploadfile(formData);
         setusertext("")
         setfile(null)
         setfilesaved(!filesaved)
      } catch (error) {
        console.log(error);
      }
    }
  };
  const selectFileHandler = (e) => {
    // set selected file on the state becasuse we need to send this file on server
    setfile(e.target.files[0]);
    // set file name in inputfield
    setusertext(e.target.files[0].name);
  };
  // check when key value is enter then call sendmessage func
  const check = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // concatenate text and emoji
   const handelemojiClick = (emoji) =>{
     setusertext(usertext + emoji)
   }
  return (
    <Container>
      <EmojiEmotionsOutlinedIcon  onClick = {()=>setCheckOpenEmoji(!checkOpenEmoji)}/>
      <label htmlFor="fileinput">
        <ClipIcon />
      </label>
      <input
        type="file"
        name="file"
        id="fileinput"
        style={{ display: "none" }}
        onChange={(e) => selectFileHandler(e)}
      />
      <InputContainer>
        <InputContent
          value={usertext}
          placeholder="Type a message"
          onChange={(e) => setusertext(e.target.value)}
          onKeyDown={(e) => check(e)}
        />
      </InputContainer>
      {usertext === "" ? (
        <SpeechIcon />
      ) : (
        <SendIcons onClick={sendMessage} sx={{ fontSize: 10 }} />
      )}
      {
        checkOpenEmoji ? <ShowEmoji handelemojiClick={handelemojiClick}/> : null
      }
    </Container>
  );
}

export default MessageFooter;




