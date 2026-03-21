function TodoItem({item,deleteTodo,toggleTodo,editTask}){
    
const handleEdit = () => {
    const newText = prompt("Modifier la tâche");
    if (!newText) return;
    editTask(item.id, newText);
  };
    //function to render a single todo item

    return(
        <li>
            <input type='checkbox' checked={item.completed} onChange={() => toggleTodo(item.id)}/>
            <span style={{textDecoration: item.completed ? "line-through" : "none"}}>
                {item.tache}
            </span>
            <button type="button" onClick={handleEdit}>Update</button>
            <button type="button" onClick={() => deleteTodo(item.id)}>Delete</button>
            
        </li>
    )
}
export default TodoItem;