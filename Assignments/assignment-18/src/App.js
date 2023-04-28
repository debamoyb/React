// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { useContext } from 'react';
import { AuthContext } from './components/Context';

function App() {
    const {isloggedin} = useContext(AuthContext);
    return(
      <div className='App'>
      {isloggedin ? <Home/>:<Login/>}
      </div>
    );
    
}

export default App;
