import React, { useEffect, useState } from "react";
import "../../style/MessageDelete.css";
import {toast} from "react-toastify"

function MessageDelete() {

  //  const copyToClipBoard = async(text) =>{
  //    try{
  //     await navigator.clipboard.writeText(text)
  //      setMaintainMessage(!MaintainMessage)
  //      toast.success("Msg copyied")
  //    }catch(error){
  //     console.log("error ocuured while copy" ,error)
  //    }
  //  }

  return (
    <div className="deletecard">
      <ul style={{ listStyle: "none", color: "white" }} className="liststyle">
        <li>CopyMessage</li>
        <li>DeleteMessage</li>
      </ul>
    </div>
  );
}

export default MessageDelete;
