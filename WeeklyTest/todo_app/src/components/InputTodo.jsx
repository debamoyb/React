import { useContext, useEffect, useState } from "react";
import "./style.css";
import { Context } from "./Store";
const InputTodo = () => {
	const { add, defaults, update, resetDefaults } = useContext(Context);
	const [getData, setData] = useState("");

	console.log(defaults);
	console.log(getData !== 0);

	const handleSubmit = () => {
		if (getData !== "") {
			add(getData);
			setData("");
		}
	};

	useEffect(() => {
		setData(defaults.todo);
	}, [defaults]);

	return (
		<div className="inputContainer">
			<input type="text" value={getData} placeholder="     Add Todo..." onChange={(e) => setData(e.target.value)} />
			{defaults.todo.length > 0 ? (
				<button onClick={() => {
						update(defaults.id, getData);
						setData("");
						resetDefaults();
					}}>
					+
				</button>
			) : (
				<button onClick={handleSubmit}>+</button>
			)}
		</div>
	);
};

export default InputTodo;