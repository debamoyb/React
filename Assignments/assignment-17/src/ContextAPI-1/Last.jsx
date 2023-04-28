import React, { useContext, useState } from "react";
import myContext from "./MyContext";
const Last=()=>{
    const [childName,setChildName]=useState('');
    const {updateName,setChildData} = useContext(myContext);
    
    return(<>
        <h1>Last Component</h1>
        
        <div className="flex">
            <div className="para">
            <h2 style={{color:'blue'}}>{updateName}</h2>
        </div>
        </div>
        <input type="text" name="" id="" placeholder="Enter Some Text" onChange={(e)=>{setChildName(e.target.value)}}/>

        <button onClick={()=>{setChildData(childName)}}>Send Data to A Component</button>
        

    </>)
}

export default Last;