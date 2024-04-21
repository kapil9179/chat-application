
import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import {Box,Typography,List,ListItem} from '@mui/material'
import { qrCodeImage } from '../../constants/data';
import styled from '@emotion/styled';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode"
import { ContextContainer } from '../../contextApi/Context';
import { createUser } from '../../service/api';
//import '../../style/DailogLogin.css'

const dailogStyle = {
  height:"90%",
  marginTop:"10px",
  width:'60%',
  maxWidth:"100%",
  maxHeight:"100%",
  boxShadow:"none",
  "@media(max-width:900px)":{
    width:"80%"
  },
  "@media(min-width:900px)":{
    width:"63%"
  }
}

const QRcode = styled("img")({
 height:250,
 width:250,
 "@media(max-width:900px)":{
    marginTop:"20px",
  }
})

const Container = styled(Box)`
margin-top:10px;
display:flex;
justify-content:space-around;
@media(max-width:900px){
 width:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 overflow-x:hidden
}
`
const ContainerRight = styled(Box)`
margin-top:10px;
@media(max-width:900px){
 margin-left:30px;
}
`

const Styledlist = styled(List)`
& > li{
 padding:0px;
 margin:8px;
 font-size:18px;
}
`

function DailogLogin() {
     const {setlogindata}=useContext(ContextContainer)

// add functionality
 const onLoginSuccess = (res)=>{
   const decode = jwtDecode(res.credential);
      setlogindata(decode);
      //calling api
      createUser(decode);
       localStorage.setItem("logincheck",true);
 }

 const onerrorhandler = (Credentialserror)=>{
   console.log(Credentialserror);
 }

  return (
     <Dialog open={true} PaperProps={{sx:dailogStyle}}>
       <Container>
         <ContainerRight>
          <Typography>use Chatapp on your computer</Typography>
          <Styledlist>
            <ListItem>
               1. Open Chatapp on your phone
            </ListItem>
            <ListItem>
               2. Tap Menu: on Android,or Setting on iphone
            </ListItem>
            <ListItem>
               3. Tap Linked devices and then Link a device 
            </ListItem>
            <ListItem>
               4. point your phone at this screen to capture the QR code
            </ListItem>
          </Styledlist>
         </ContainerRight>
         <Box>
            <QRcode src={qrCodeImage}/> 
             <Box>
               <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onerrorhandler}
               />
             </Box>
         </Box>
       </Container>
     </Dialog>
       
  )
}

export default DailogLogin