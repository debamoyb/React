import React from "react";
import { useContext } from "react";
import { AuthContext } from "./Context";
const Nav = () => {

    const {setIsLoggedIn} = useContext(AuthContext);
    return (
        <div className="nav">
            <logo>
                <h2>Logo</h2>
            </logo>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Info</li>
                <li>Contact</li>
            </ul>
            <button onClick={()=>{setIsLoggedIn(false)}} style={{color:'orange',background:'black',border:'none'}}>Log Out</button>
        </div>

    )
}
export default Nav;