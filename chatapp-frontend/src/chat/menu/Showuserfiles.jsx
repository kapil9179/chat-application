import React, { useContext } from "react";
import { ContextContainer } from "../../contextApi/Context";
import "../../style/files.css";

function Showuserfiles({ files }) {
  const { logindata } = useContext(ContextContainer);
  let trimstring = "";
  if (files && files.createdAt) {
    const date = new Date(files.createdAt);
    let hours = date.getHours();
    const minute = date.getMinutes();
    const suffix = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    trimstring = `${hours}:${minute}${suffix}`;
  } else {
    return <p>somthing went wrong</p>;
  }

  return (
    <div
      className={`${
        logindata.sub === files.senderId
          ? `files-container-sender`
          : `files-container-receiver`
      } files-Container`}
    >
      <span>
        <img src={files.path} alt="image not found" className="files" />
        <p style={{color:"black"}}>{trimstring}</p>
      </span>
    </div>
  );
}

export default Showuserfiles;
