function TodoItem({item,deleteTodo,toggleTodo}){
    //function to render a single todo item

    return(
        <li>
            <input type='checkbox' checked={item.completed} onChange={() => toggleTodo(item.id)}/>
            <span style={{textDecoration: item.completed ? "line-through" : "none"}}>
                {item.tache}
            </span>
            <button type="button" onClick={() => deleteTodo(item.id)}>Delete</button>
        </li>
    )
}
export default TodoItem;