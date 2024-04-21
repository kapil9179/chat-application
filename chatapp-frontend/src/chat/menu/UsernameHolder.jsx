import React, { useContext, useEffect, useState } from "react";
import "../../style/SetName.css";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { ContextContainer } from "../../contextApi/Context";
import { setUserNameAPI } from "../../service/api";
import { toast } from "react-toastify";

function UsernameHolder({ setsaveusername, setOpenNameBox, opennamebox }) {
  const { logindata } = useContext(ContextContainer);
  const [uservalue, setuservalue] = useState("");
  // create data format which is send to the server
  const datasendToServer = {
    username: uservalue,
    senderId: logindata.sub,
  };

  // my thinking how to set valid network call
  const nameSetHandler = async () => {
    try {
        // handel if username is number dont call an api
      if (isNaN(uservalue)) {
        const res = await setUserNameAPI(datasendToServer);
        if (res && res.username) {
          setsaveusername(res.username);
          setuservalue("");
          setOpenNameBox(!opennamebox);
        } else {
          toast.success("please wait server is down");
        }
      } else {
        toast.success("user name should be charcter");
      }
    } catch (error) {
      console.log("error ocuur setapi", error.message);
    }
  };
  return (
    <>
      <input
        type="text"
        autoComplete="off"
        name="text"
        className="input"
        value={uservalue}
        placeholder="Username"
        onChange={(e) => setuservalue(e.target.value)}
      />
      <BeenhereIcon
        onClick={nameSetHandler}
        sx={{ display: uservalue && uservalue.length >= 3 ? "block" : "none" }}
      />
    </>
  );
}

export default UsernameHolder;
