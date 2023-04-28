import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { Context } from "./Store";

const TodoList = () => {
	const { todoArr } = useContext(Context);
	console.log("todoArr", todoArr);
	return (
		<>
			{todoArr.map((e) => {
				return (
					<React.Fragment key={e.id}>
						<TodoItem todo={e} />
					</React.Fragment>
				);
			})}
		</>
	);
};

export default TodoList;