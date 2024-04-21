import React, { useContext, useState } from "react";
import Menuheader from "./Menuheader";
import Search from "./Search";
import Conversestion from "./conversestion";
import { ThemeContext } from "../../contextApi/ThemeContext";
import '../../index.css'
function Menu() {
  const {theme} = useContext(ThemeContext)
  const [text, settext] = useState("");
  return (
    <div className={theme ? "darktheme":"lightthem"}>
      <Menuheader />
      <Search settext={settext} />
      <Conversestion text={text} />
    </div>
  );
}

export default Menu;
