import React from "react";

const Header = () => {
	return <div style={{ display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0px"}}>
        <h1 style={{fontSize:"58px",color:"grey"}}>todos</h1>
        <p>Items wil persist in the browser local storage</p>
    </div>;
};

export default Header;