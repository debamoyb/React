// import logo from './logo.svg';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import AddToCart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<AddToCart/>}/>
      </Routes>
    </div>
  );
}

export default App;
