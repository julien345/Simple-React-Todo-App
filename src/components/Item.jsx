function Item({task,toggleTask,updateTask,deleteTask}){

  const handleDelete=()=>{
    deleteTask(task.id)
  }

  const handleUpdate=()=>{
     const newText = prompt("Modifier la tâche");
     if (!newText) return;
     updateTask(task.id, newText);
  }
    return(
        <div className="flex items-center justify-between gap-4 p-2 border-b border-gray-100">
              <label className="flex items-center space-x-3 cursor-pointer flex-grow">
                <input
                  type="checkbox"
                  className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  value={task.id}
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span className="text-gray-700 font-medium"
                style={{textDecoration: task.completed ? "line-through" : "none"}}
                >
                {task.task}
                </span>
              </label>

              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition duration-200" onClick={handleUpdate}>
                  Update
                </button>
                <button className="px-3 py-1.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition duration-200" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
    )
}
export default Item;