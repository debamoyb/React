// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List';

function App() {
  let [names, setNames] = useState('');
  let [name, setName] = useState([]);

  const handleChange = (event) => {
    setNames(event.target.value);
  }
  const handleClick = () => {
    setName(() => {
      return [...name, names];
    });
    setNames('');
  }

  return (
    <div className="App" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div style={{display:"flex",gap:"30px",margin:"50px"}}>
        <input type="text" value ={names} onChange={handleChange} required/>
        <button type="submit" onClick={handleClick}>Add Item</button>
      </div>
      <table>
        <tbody>
          <tr>
            <td>{name.map((i)=>{
              return <List value={i}/>;
            })}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
