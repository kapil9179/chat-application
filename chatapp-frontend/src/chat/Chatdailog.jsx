import { Dialog ,Box,styled} from '@mui/material'
import React, { useContext } from 'react'
import { ContextPerson } from '../contextApi/contextperson'
// imports component
import Menu from './menu/Menu'
import Emptychat from './menu/Emptychat'
import Chatbox from './menu/Chatbox'

const dailogStyle = {
  height:"95%",
  width:'100%',
  marginLeft:"15px",
  marginRight:"15px",
  borderRadius:0,
  maxWidth:"100%",
  maxHeight:"100%",
  boxShadow:"none",
}

const ParentComponent = styled(Box)`
display:flex;
`
const LeftComponent = styled(Box)`
 width:450px;
`
const RightComponent = styled(Box)`
width:72%;
border-left:2px solid rgba(0,0,0,0.14);
`
function Chatdailog() {
    const {person} = useContext(ContextPerson)
  //    const memoizedPerson = useMemo(()=> person,[person])
  return (
    <Dialog open={true} PaperProps={{sx:dailogStyle}}>
      <ParentComponent>
          <LeftComponent>
             <Menu/>
          </LeftComponent>
            <RightComponent>
              {/* conditional renderning */}
             {Object.keys(person).length>0?<Chatbox/>: <Emptychat/>}
          </RightComponent>
      </ParentComponent>
    </Dialog>
  )
}

export default Chatdailog