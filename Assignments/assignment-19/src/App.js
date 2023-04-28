import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import {Route, Routes} from 'react-router-dom';
import Products from './Routing/Products';
import Cart from './Routing/Cart';


function App() {
    
    return(
      <div className='App'>

      <Nav/>
      
      <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>


      </Routes>

      </div>
    );
    
}

export default App;