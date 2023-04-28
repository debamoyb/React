import { useEffect, useState } from "react";
const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setState([...json.products]));
  }, []);

  return (
    <>
    <ol>
      {state.map((e) => {
        return <li key={e.id}>{e.title}</li>;
      })}
    </ol>
    </>
  );
};

export default App;