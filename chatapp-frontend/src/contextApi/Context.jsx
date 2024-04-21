import { createContext, useEffect, useState } from "react";
export const ContextContainer = createContext();
import { useRef } from "react";
import { io } from "socket.io-client";

const ContextProvider = ({ children }) => {
  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:7000", {
      withCredentials: true,
    });
  }, []);

  const [logindata, setlogindata] = useState("");
  const [activeUser, setActiveUser] = useState([]);
  return (
    <ContextContainer.Provider
      value={{
        logindata,
        setlogindata,
        socket,
        activeUser,
        setActiveUser,
      }}
    >
      {children}
    </ContextContainer.Provider>
  );
};

export default ContextProvider;
