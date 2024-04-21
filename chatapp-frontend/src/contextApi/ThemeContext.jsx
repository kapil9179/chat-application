import { createContext, useState } from "react";

  
export const ThemeContext = createContext()


 const ThemeContextProvider = ({children})=>{
  const [theme,settheme] = useState(false)

    return(
        <ThemeContext.Provider 
         value={{theme,settheme}}
        >
          {children}
       </ThemeContext.Provider>
    )
 }
export default ThemeContextProvider
