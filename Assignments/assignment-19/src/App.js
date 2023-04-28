import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { useContext } from 'react';
import { AuthContext } from './components/Context';
import {Navigate, Route, Routes} from 'react-router-dom'
import Products from './Routing/Products';
import Profile from './Routing/Profile';
import Support from './Routing/Support';
import ProductDetails from './Routing/ProductDetails';
import Technologies from './Routing/Technologies';
import Html from './Routing/Html';
import Css from './Routing/Css';
import Login from './components/Login';
import Cart from './Routing/Cart';
import Protected from './Routing/Protected';
function App() {
    const {isloggedin} = useContext(AuthContext);
    return(
      <div className='App'>
      {isloggedin?
      <>
      <Nav/>
      <Routes>
      <Route path='' element={<Protected><Home/></Protected>}/>
      <Route path='/home' element={<Protected><Home/></Protected>}/>
      <Route path='/profile' element={<Protected><Profile/></Protected>}/>
      <Route path='/products' element={<Protected><Products/></Protected>}/>
      <Route path='/support' element={<Protected><Support/></Protected>}/>
      <Route path = '/details/:id' element={<Protected><ProductDetails/></Protected>} />
      <Route path='/technologies' element={<Protected><Technologies/></Protected>}>
          <Route path='' element={<Navigate to='html'/>} />
          <Route path='html' element={<Html/>} />
          <Route path='css' element={<Css/>} />
      </Route>
      <Route path='/cart' element={<Protected><Cart/></Protected>} />
      </Routes>
      </>:
        <div>
          <Login/>
        </div>
      }
      </div>
    );
}

export default App;