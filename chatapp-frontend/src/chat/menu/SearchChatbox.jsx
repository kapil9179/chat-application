// import React, { useEffect, useState } from "react";
// import "../../style/SearchChatbox.css";
// import CloseIcon from "@mui/icons-material/Close";
// import { styled } from "@mui/material";
// import { toast } from "react-toastify";
// const CrossIcon = styled(CloseIcon)`
//   position: absolute;
//   left: 0;
//   margin-left: 15px;
// `;


// function SearchChatbox({ person, setshow, show, messageContainer }) {
//     console.log("this is search",messageContainer);
//   const [inputtext, setinputtext] = useState("");
//   const [searchmessage, setSearchMessage] = useState(null);

//   useEffect(()=>{
//     let filteredmessage = [];
//     if(inputtext !== ""){
//       filteredmessage = messageContainer.filter((message)=>message.text.toLowerCase().includes(inputtext.toLowerCase()));
//       setSearchMessage(filteredmessage);
//     }else if(filteredmessage.length === 0){
//       setSearchMessage([]);
//     }
//   },[inputtext,messageContainer])
 
//   // consider as a dependency messageContiner because we need updated and delete message
   
  

//   return (
//     <div className="card">
//       <div className="InputContainer">
//         <input
//           placeholder="Search Messages"
//           id="input"
//           className="input"
//           name="text"
//           type="text"
//           onChange={(e) => setinputtext(e.target.value)}
//         />
//         <CrossIcon onClick={() => setshow(!show)} />
//       </div>
//       {inputtext === "" && (
//         <p className="searchwithname">search for message with {person.name}</p>
//       )}
//       {searchmessage && searchmessage.length > 0
//         ? searchmessage.map((msg, index) => {
//             return <li key={index}>{msg.text}</li>;
//           })
//         : null
//         }
//     </div>
//   );
// }

// export default SearchChatbox;


import React, { useEffect, useState } from "react";
import "../../style/SearchChatbox.css";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material";
import { toast } from "react-toastify";
const CrossIcon = styled(CloseIcon)`
  position: absolute;
  left: 0;
  margin-left: 15px;
`;

function SearchChatbox({ person, setshow, show, messageContainer }) {
  const [inputtext, setinputtext] = useState("");
  const [searchmessage, setSearchMessage] = useState([]);

  useEffect(()=>{
    let filteredmessage = [];
    if(inputtext !== ""){
      filteredmessage = messageContainer.filter((message)=>message.text.toLowerCase().includes(inputtext.toLowerCase()));
    }
    setSearchMessage(filteredmessage);
  },[inputtext])

  return (
    <div className="card">
      <div className="InputContainer">
        <input
          placeholder="Search Messages"
          id="input"
          className="input"
          name="text"
          type="text"
          onChange={(e) => setinputtext(e.target.value)}
        />
        <CrossIcon onClick={() => setshow(!show)} />
      </div>
      {inputtext === "" && (
        <p className="searchwithname">search for message with {person.name}</p>
      )}
      {searchmessage.length > 0
        ? searchmessage.map((msg, index) => {
            return <li key={index}>{msg.text}</li>;
          })
        : inputtext !== "" && <p>No message found</p>
        }
    </div>
  );
}

export default SearchChatbox;
