import React, {createContext, useState } from "react";

const AuthContext = createContext();

const MainComponent=({children})=>{
    const [isloggedin,setIsLoggedIn] = useState(false);
    return(
        <AuthContext.Provider value={{isloggedin,setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default MainComponent;
export {AuthContext}