import React from "react";
import { useState,useContext } from "react";
import { AuthContext } from "./Context";
import { Link } from "react-router-dom";

const Login = (props) => {
    const {setIsLoggedIn}=useContext(AuthContext);
    const [user,setUser] = useState({
        name:'',
        password:''
    })

    const handleClick =()=>{
        if(user.name==="" && user.password===""){
            setIsLoggedIn(true);
        }
        else{
            alert('Wrong Credentials');
        }
    }

    return (
        <div className="form">
            <div className="login">
                <h1>login</h1>
                <label >User-Name</label>
                <input type="text" placeholder="username" onChange={(e)=>{
                    setUser({...user,name:e.target.value})
                }}/>
                <br />
                <label>Password</label>
                <input type="password" placeholder="password" onChange={(e)=>{
                    setUser({...user,password:e.target.value})
                }}/>
                <br />
                <Link to='/home'>
                <button onClick={handleClick}>login</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;