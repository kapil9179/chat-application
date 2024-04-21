// import { Box } from "@mui/material";
// import styled from "@emotion/styled";
// import MessageFooter from "./MessageFooter";
// import { getMessage } from "../../service/api";
// import { getFile } from "../../service/api";
// import { useEffect, useState } from "react";
// import Showuserfiles from  "./Showuserfiles";


// import ShowUserMsg from "./ShowUserMsg";

// // css
// const Container = styled(Box)`
//   height: 81vh;
//   overflow-y: scroll;
//   background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
//   background-size: 50%;
// `;

// function Messages({ conversestion }) {
//   const [usermessage, setusermessage] = useState([]);
//   const [livechange, setlivechange] = useState(false);
//   const [filesaved, setfilesaved] = useState(false);
//   const [userfile, setuserfile] = useState([]);
  
//   useEffect(() => {
//     const getuserMessage = async () => {
//       try {
//          // data is array of object
//         const data = await getMessage(conversestion._id);
//         console.log("this is data",data);
//         setusermessage(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     conversestion._id && getuserMessage();
//   }, [conversestion._id, livechange]);

//   useEffect(() => {
//     const getfilesdetails = async () => {
//       try {
//           // response is  array of object
//         const res = await getFile(conversestion._id);
        
//         setuserfile(res);
//       } catch (error) {
//         console.log("error occurs when fetch file to server", error);
//       }
//     };
//     if (filesaved || conversestion._id) {
//       getfilesdetails();
//     }
//   }, [conversestion._id, filesaved]);

//   return (
//     <>
//       <Container>
//         {usermessage && usermessage.length > 0 ? (
//           usermessage.map((singelmessage, index) => (
//             <ShowUserMsg singelmessage={singelmessage} key={index} />
//           ))
//         ) : (
//           <p>please wait your chat is loading...</p>
//         )}
//         {userfile && userfile.length > 0 ? (
//           userfile.map((files, index) => (
//             <Showuserfiles files={files} key={index} />
//           ))
//         ) : (
//           null
//         )}

//       </Container>
//       <MessageFooter
//         conversestion={conversestion}
//         setlivechange={setlivechange}
//         livechange={livechange}
//         filesaved={filesaved}
//         setfilesaved={setfilesaved}
//       />
//     </>
//   );
// }

// export default Messages;

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { getMessage, getFile } from "../../service/api";
import ShowUserMsg from "./ShowUserMsg";
import Showuserfiles from "./Showuserfiles";
import MessageFooter from "./MessageFooter";

const Container = styled(Box)`
  height: 81vh;
  overflow-y: scroll;
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-size: 50%;
`;

function Messages({ conversestion ,setmessageContainer}) {
  const [items, setItems] = useState([]);
  const [livechange, setlivechange] = useState(false);
  const [filesaved, setfilesaved] = useState(false);
  useEffect(() => {
    const getItems = async () => {
      try {
        const messages = await getMessage(conversestion._id);
          setmessageContainer(messages);
        const files = await getFile(conversestion._id);
        const newItems = [...messages, ...files].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setItems(newItems);
      } catch (error) {
        console.log(error);
      }
    };
    if (conversestion._id) {
      getItems();
    }
  }, [conversestion._id, livechange, filesaved]);

  // share data between parent to child
  // if(items){
  //   getallchatcallback(items);
  // }

  return (
    <div>
      <Container>
        {items.map((item, index) => (
          item.text ? <ShowUserMsg singelmessage={item} key={index}/> : <Showuserfiles files={item} key={index} />
        ))}
      </Container>
      <MessageFooter
        conversestion={conversestion}
        setlivechange={setlivechange}
        livechange={livechange}
        filesaved={filesaved}
        setfilesaved={setfilesaved}
      />
    </div>
  );
}

export default Messages;
