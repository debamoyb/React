// import logo from './logo.svg';
import './App.css';
import Store from "./components/Store";
import TodoApp from "./components/TodoApp";

function App() {
	return (
		<Store>
			<div style={{display:"flex",flexDirection:"column",width:"100vw",height:"100vh",justifyContent:"center",alignItems:"center"}}>
				<TodoApp />
			</div>
		</Store>
	);
}

export default App;
