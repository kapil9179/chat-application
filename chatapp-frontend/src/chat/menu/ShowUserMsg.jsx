
import React, { useContext, useState } from 'react'
import '../../style/Message.css'
import {ContextContainer} from "../../contextApi/Context"
import MessageDelete from './MessageDelete';

function ShowUserMsg({singelmessage,setItems,items}) {
  const {logindata} = useContext(ContextContainer);
  // convert 12 hours format 
  let trimstring = ''
  if(singelmessage && singelmessage.createdAt){
    const date = new Date(singelmessage.createdAt);
    let hours = date.getHours();
    const minute = date.getMinutes();
    const suffix = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    trimstring = `${hours}:${minute}${suffix}`
  }else{
    return <p>somthing went wrong</p>
  }

 

  return (
    <div className='containmessageinfo'>
    <div className={logindata.sub === singelmessage.senderId ? 'message-container-sender' : 'message-container-receiver'}>
    <p className='message-text'>{singelmessage.text}  {trimstring}</p>
    </div>
     <div>
     </div>
    </div>
  )
}
export default ShowUserMsg

