
import './Nav.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
// import Login from './Login';



function Nav(props) {
    const Cart=useSelector((state)=> state.cart)
     console.log(Cart);
  return (
    <div className="nav">
      <div id="title">
        <h2>My Web</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        
        <Link to="/products">Products</Link>
        
        <Link to="/cart">Cart <span>{Cart.length}</span> </Link>
        <button style={{color:"white",backgroundColor:"blue",border:"0",height:"35px",width:"100px",cursor:"pointer"}}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;