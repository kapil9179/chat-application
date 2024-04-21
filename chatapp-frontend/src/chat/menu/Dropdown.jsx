import React, { useContext, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../../style/dropdown.css";
import { ThemeContext } from "../../contextApi/ThemeContext";

import "../../index.css";
function Dropdown({ toggle }) {
  const {settheme,theme}  =  useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  
  return (
    <div className="dropdown">
      <button
        className={`dropbtn ${isOpen ? "active" : ""}`}
        onClick={toggleOpen}
      >
        <MoreVertIcon />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <p onClick={toggle}>Profile</p>
          <p>My account</p>
          <p>Logout</p>
          <p onClick={()=>settheme(!theme)}>darkMode</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
