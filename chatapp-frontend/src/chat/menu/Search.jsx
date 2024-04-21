import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, styled} from "@mui/material";
import { InputBase } from "@mui/material";

const Container = styled(Box)`
    background-color: #ededed;
    margin: 5px;
    height: 35px;
    border-radius: 1px;
  `;

  const Wrapper = styled(Box)`
    display:flex;
    align-items:center;
  `
  const Icon = styled(SearchIcon)`
    margin: 6px;
  `;
 const Input = styled(InputBase)`
  font-size:15px;
  padding-left:10px;
  color:black;
  width:100%;
 `
function Search({settext}) {
  return (
    <Container>
      <Wrapper>
        <Icon  fontSize="small"/>
        <Input 
        placeholder="Search or Start new Chat" 
        onChange={(e)=>settext(e.target.value)}
        />
      </Wrapper>
    </Container>
  );
}

export default Search;
