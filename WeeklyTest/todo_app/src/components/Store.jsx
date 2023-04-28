import { createContext, useState } from "react";

export const Context = createContext();
const TodoArr = ({ children }) => {
	const [todo, setTodo] = useState([]);
	const [defaults, setDefault] = useState({ id: "", todo: "" });
	function add(ele) {
		console.log("add ele", ele);
		setTodo([
			...todo,
			{ todo: ele, id: new Date().getTime().toLocaleString() },
		]);
	}
	function del(id) {
		let modifiedArr = todo.filter((e) => e.id !== id);
		setTodo(modifiedArr);
	}
	function setDefaults(data) {
		setDefault(data);
	}
	function resetDefaults(data) {
		setDefault({ id: "", todo: "" });
	}
	function update(id, data) {
		const isPresentAt = todo.findIndex((e) => e.id === id);
		const modifiedArr = todo;
		modifiedArr[isPresentAt].todo = data;
		setTodo(modifiedArr);
	}
	const data = {
		todoArr: todo,
		defaults: defaults,
		add: add,
		del: del,
		setDefaults: setDefaults,
		update: update,
		resetDefaults: resetDefaults,
	};
	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default TodoArr;