
import { createContext , useState } from "react";


export const NavigationContext = createContext({
      navToggle: false ,
      setNavToggle : ()=> null
})


export const NavigationProvider = ({ children }) => {
      
      const [navToggle  , setNavToggle] = useState(false)
      
      return (
            <NavigationContext.Provider value={[navToggle, setNavToggle]}>
                  
                  {children}

            </NavigationContext.Provider>
      )
      
}