import React from "react";
import {Link} from "react-router-dom";
const Nav = () => {

    return (
        <div className="nav">
            <logo>
                <h2>Logo</h2>
            </logo>
            <div id="menu">
                <Link to="/Home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>

    )
}
export default Nav;