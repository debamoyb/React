import React, { useContext, useState } from "react";
import B from "./B";
import myContext from './MyContext';
const A=()=>{

    const [name,setName]=useState('Deb');
    const [updateName,setUpdateName] = useState('');
    const [childData,setChildData]=useState('');


    return (<>
        
        <h1>A Component</h1>
        <input type="text" name="" id="" placeholder="Enter Some Text" onChange={(e)=>{setName(e.target.value)}}/>

        <button onClick={()=>{setUpdateName(name)}}>Send Data to Last Component</button>
        <div className="flex">
            <div className="para">
            <h2 style={{color:'blue'}}>{childData}</h2>
        </div>
        </div>
        <hr />
        <myContext.Provider value={{updateName,setChildData}}>
            <B/>
        </myContext.Provider>
        
    </>) 
}

export default A;