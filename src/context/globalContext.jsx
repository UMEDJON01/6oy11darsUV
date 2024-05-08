import { createContext } from "react";

export const GlobalContext = createContext();


export default function GlobalContextProvider({children}){
    <GlobalContext.Provider value={{size:0}}>
        {children}
    </GlobalContext.Provider>
}