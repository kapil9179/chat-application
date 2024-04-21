import React from 'react'
import { Box } from '@mui/material'
import '../../style/Emptychat.css'
import image from '../../assets/backgroundchat.jpg'
import styled from '@emotion/styled'
const Container = styled(Box)`
 background-image:url(${image});
 background-size:cover;
  background-position:center;
`
function Emptychat() {
  return (
   <Container className='emptysection'>
       
   </Container>
  )
}

export default Emptychat