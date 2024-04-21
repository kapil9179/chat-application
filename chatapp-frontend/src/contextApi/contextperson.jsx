import { createContext, useState } from "react";

 export const ContextPerson = createContext();

 const  ContextPersonProvider = ({children})=>{
    const [person,setperson] = useState({})
    return(
        <ContextPerson.Provider value={{person,setperson}}>
             {children}
        </ContextPerson.Provider>
    )
 }

 export default ContextPersonProvider;