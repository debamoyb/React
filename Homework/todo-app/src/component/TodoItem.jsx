function TodoItem({todoitem,deleteItem,endItem}){
    return (
        <div>
           {
            todoitem.map((item,index)=>{
                return (
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
                        <h4>{item.title}</h4>
                        <h5 style={{color:"red"}}>{item.status ? "Completed" : "Pending"}</h5>
                        <button style={{width:"70px",height:"25px",border:"0",backgroundColor:"Lightgreen"}} onClick={()=>{endItem(index)}}>Finish</button>
                        <button style={{width:"70px",height:"25px",border:"0",backgroundColor:"Lightpink"}} onClick={()=>{deleteItem(index)}}>Delete</button>
                    </div>
                )
            })
           }
        </div>
    )
}

export default TodoItem