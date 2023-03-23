import { useState } from "react"
import TodoItem from "./TodoItem"
function AddItem(){
    const [state,setState]=useState("")
    const [todoitems,setTodoItems]=useState([])
    const additem=()=>{
        var newItem={
            title:state,
            status:false
        }
        setTodoItems([...todoitems,newItem])
    }
    const endItem=(index)=>{
        var newArrays= todoitems.map((item,i)=>{
            return index===i ? {...item,status:!item.status} :item
        })
        setTodoItems(newArrays)
    }
    const deleteItem=(index)=>{
        var filteredData=todoitems.filter((item,i)=>{
                return index !=i
        })
        setTodoItems(filteredData)
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <input style={{height:"20px"}} value={state} 
                type="text" onChange={(e)=> {
                setState(e.target.value)
                }}
            />&nbsp;&nbsp;&nbsp;
            <button onClick={additem} style={{width:"70px",height:"25px",border:"0",backgroundColor:"Lightblue"}}>ADD</button>
            <TodoItem todoitem={todoitems} deleteItem={deleteItem} endItem={endItem} />
        </div>
    )
}

export default AddItem