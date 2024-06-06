import { createContext, useState } from "react";



const GeneralContext=createContext()

function GeneralContextProvider({children}){

    const [control1,setControl1]=useState(false);

    const categoryQueries=["pasta","meat","cheese","pizza","chicken"]
   

    return (
        <GeneralContext.Provider value={{control1,setControl1,categoryQueries}}>
            {children}
        </GeneralContext.Provider>
    )
}

export {GeneralContext,GeneralContextProvider}