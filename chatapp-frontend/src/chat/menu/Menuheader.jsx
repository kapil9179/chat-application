import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { ContextContainer } from "../../contextApi/Context";
import styled from "@emotion/styled";
import MessageIcon from "@mui/icons-material/Message";
import Dropdown from "./Dropdown";
import Dpdropdown from "./Dpdropdown";
function Menuheader() {
  const { logindata } = useContext(ContextContainer);
  const [showdpinfo,setshowdpinfo]=useState(false);
  const toggle = ()=> setshowdpinfo(!showdpinfo);
   const [dp,setdp] = useState("")
  // maintain css
  const Container = styled(Box)`
    background-color: #ededed;
    display: flex;
    align-items: center;
  `;
  const Wrapper = styled(Box)`
    margin-left: auto;
  `;
  const DpImage = styled("img")`
    margin: 5px;
    width: 35px;
    border-radius: 50px;
    height: 35px;
  `;
  const Message = styled(MessageIcon)`
  margin-right:10px;
  font-size:22px;
  `
  const MainContainer = styled(Box)
  `
  position:relative;
  `

  return (
    <MainContainer>
    <Container>
      <DpImage src={dp ? dp : logindata.picture} alt="DP" onClick={toggle}/>
      <Wrapper>
        <Message/>
        <Dropdown toggle={toggle} />
      </Wrapper>
    </Container>
    {showdpinfo && <Dpdropdown toggle={toggle} setdp={setdp}/>}
    </MainContainer>
  );
}

export default Menuheader;
