function TodoItem({todoitem,deleteItem,endItem}){
    return (
        <div>
           {
            todoitem.map((item,index)=>{
                return (
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h4>{item.title}</h4>&nbsp;&nbsp;&nbsp;
                        <h5 style={{color:"red"}}>{item.status ? "Completed" : "Pending"}</h5>&nbsp;&nbsp;&nbsp;
                        <button style={{width:"70px",height:"25px",border:"0",backgroundColor:"Lightgreen"}} onClick={()=>{endItem(index)}}>Finish</button>&nbsp;&nbsp;&nbsp;
                        <button style={{width:"70px",height:"25px",border:"0",backgroundColor:"Lightpink"}} onClick={()=>{deleteItem(index)}}>Delete</button>&nbsp;&nbsp;&nbsp;
                    </div>
                )
            })
           }
        </div>
    )
}

export default TodoItem