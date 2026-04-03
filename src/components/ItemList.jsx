import Item from './Item'

function ItemList({tasks,toggleTask}){
    
    return(
        <div className="space-y-4">
            {tasks.map((task)=>(
                <Item key={task.id} task={task} toggleTask={toggleTask}/>
            ))}
        </div>
    )
}
export default ItemList;