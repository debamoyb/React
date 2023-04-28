import { useContext } from "react";
import { Context } from "./Store";
import "./style.css";

const TodoItem = ({ todo }) => {
	const { setDefaults, del } = useContext(Context);
	return (
		<div className="TodoItem">
			<div className="firstHalf">
				<input type="checkbox" />
				<p>{todo.todo}</p>
			</div>
			<div className="secondHalf">
				<button className="btn" onClick={() => setDefaults(todo)}>
                <ion-icon name="create-outline"></ion-icon>
				</button>
				<button className="btn" onClick={() => del(todo.id)}>
                <ion-icon name="trash-outline"></ion-icon>
				</button>
			</div>
		</div>
	);
};

export default TodoItem;