import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { ContextPerson } from "../../contextApi/contextperson.jsx";
import { ContextContainer } from "../../contextApi/Context.jsx";
import { SetConversestion } from "../../service/api.js";

// styling
const Container = styled(Box)`
  height: fit-content;
`;
const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
`;
const Dp = styled("img")`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin: 5px;
`;
const Conversestionusers = ({ user }) => {
  const { setperson } = useContext(ContextPerson);
  const { logindata } = useContext(ContextContainer);

  const getPerson = async () => {
    const data = await SetConversestion({
      senderId: logindata.sub,
      receiverId: user.sub,
    });
    setperson(user);
  };

  return (
    <Container onClick={getPerson}>
      <Wrapper>
        <Box>
          <Dp src={user.picture} alt="" />
        </Box>
        <Box>
          <p>{user.name}</p>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Conversestionusers;

// useEffect(() => {
//   const getConversestionDetails = async () => {
//     const data = await getConversestion({ senderId: logindata.sub, receiverId: person.sub });
//     console.log( "this is chatdailog data" ,data);
//     data && setconversestion(data);
//   };
//   getConversestionDetails();
// }, [person.sub, trigger]); // Add trigger to the dependency array

// const getPerson = async () => {
//   if (person.sub !== user.sub) {
//     const data = await SetConversestion({ senderId: logindata.sub, receiverId: user.sub });
//     console.log("click hone par conversestion set hua aur jo response aya wo", data);
//     setperson(user);
//     setTrigger(prev => !prev); // Toggle the trigger state
//   }
// };

// const getPerson = async()=>{
//   setperson(user);
//   const data =  await SetConversestion({senderId:logindata.sub,receiverId:user.sub})
//   console.log("click hone par conversestion set hua aur jo response aya wo",data);
//  }
// const getPerson = async () => {
//   setperson(prevPerson => {
//     if (prevPerson.sub !== user.sub) {
//       const data = await SetConversestion({ senderId: logindata.sub, receiverId: user.sub });
//       console.log("click hone par conversestion set hua aur jo response aya wo", data);
//       return user;
//     }
//     return prevPerson;
//   });
// };

// const getPerson = async () => {
//   if (person.sub !== user.sub) {
//     const data = await SetConversestion({ senderId: logindata.sub, receiverId: user.sub });
//     console.log("click hone par conversestion set hua aur jo response aya wo", data);
//     setperson(user);
//   }
// };

// const getperson = async()=>{
//     setperson(user)
//   const data = await SetConversestion({
//     senderId: logindata.sub,
//     receiverId: user.sub,
//   });
//   console.log(
//     "click hone par conversestion set hua aur jo response aya wo",
//     data
//   );
// }

// const getPerson = async () => {
//   if (person.sub !== user.sub) {
//     const data = await SetConversestion({ senderId: logindata.sub, receiverId: user.sub });
//     console.log("click hone par conversestion set hua aur jo response aya wo", data);
//     setperson(user);
//     settrigger(prev => !prev); // Toggle the trigger state here
//   }
// };
