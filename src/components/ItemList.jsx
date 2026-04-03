import Item from './Item'

function ItemList({tasks,toggleTask,deleteTask,updateTask}){
    
    return(
        <div className="space-y-4">
            {tasks.map((task)=>(
                <Item 
                key={task.id} 
                task={task} 
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                />
            ))}
        </div>
    )
}
export default ItemList;