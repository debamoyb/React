// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

const App = () => {
  const [state, setState] = useState([]);
  const [searchState, setSearch] = useState([]);
  const [doTask, setDoTask] = useState(true);
  
  const handleFetch = () => {
    fetch("https://dummyjson.com/products")
      .then((e) => e.json())
      .then((res) => {
        setState(res.products);
        setSearch(res.products);
      });
  };

  const handleChange = (item) => {
    setSearch([...state.filter((e) => e.title.includes(item))]);
    console.log(state.filter((e) => e.title.includes(item)));
  };
  useEffect(() => {
    if (doTask) {
      handleFetch();
    }
  });
  useEffect(() => {
    return () => {
      setDoTask(false);
    };
  }, []);
  return (
    <div>
      <div style={{ textAlign:"center",marginTop:"50px"}}>
        <input style={{marginBottom:"30px"}} onChange={(e) => handleChange(e.target.value)} placeholder="Search for Products" />
      </div>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:"10px"}}>
        {searchState.map((e) => {
          return (
            <div key={e.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",border:"1px solid black",width:"800px"}}>
              <div style={{width:"40%",padding:"10px"}}>
                <img style={{width:"100%",height:"100%"}} src={e.thumbnail} alt={e.title} />
              </div>
              <div style={{width:"60%",paddingLeft:"30px"}}>
                <p>Title: <b>{e.title}</b></p>
                <p>Description: {e.description}</p>
                <p>Price: {e.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
