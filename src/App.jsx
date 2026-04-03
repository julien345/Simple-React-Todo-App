import {useState,useEffect} from 'react'
import AddForm from './components/AddForm';
import Filter from './components/Filter';
import ItemList from './components/ItemList';

function App() {
// create empty array of tasks
const [tasks,setTasks]=useState(()=>{
    const savedTasks=localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
})

// useEffect to save tasks to localStorage whenever tasks change
useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks))
},[tasks]);

// function to add a task to the array of tasks
function AddTask(task){
const newTask={
  id:Date.now(),
  task:task,
  completed:false
}
setTasks(prev=>[...prev,newTask])

}
//function to toggle the completed status of a task
const toggleTask = (id)=>{
  setTasks(prev =>
    prev.map(task=>
      task.id === id
        ? {...task, completed: !task.completed}
        : task
    )
  )
}

// function to delete a task from the array of tasks
const deleteTask = (id)=>{
  setTasks(prev => prev.filter(task => task.id !== id))
}

// function to update a task in the array of tasks
const updateTask = (id, newTask)=>{
  setTasks(prev => prev.map(task => task.id === id ? {...task, task: newTask} : task))
}
// state to keep track of the current filter status
const [filterStatus,setFilterStatus]=useState("all")

// function to filter tasks based on their completed status
const filterTasks=tasks.filter(task=>{
  if(filterStatus==="active"){
    return !task.completed
  }
  if(filterStatus==="completed"){
    return task.completed
  }
  return true
})

return (
    // Le conteneur principal remplace le <body> avec la classe bg-blue-400
    <div className="min-h-screen font-sans bg-blue-400 flex justify-center pt-20">

      <div className="w-3/4 max-w-4xl rounded-xl bg-white p-6 shadow-lg flex flex-col items-center h-fit">

        {/* Title */}
        <h1 className="text-center mb-10 font-semibold leading-tight tracking-tighter text-gray-900 md:text-6xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Simple Todo List APP
        </h1>

        {/* 🔥 CONTENEUR COMMUN */}
        <div className="w-full max-w-md">

          {/* text field and add button */}
          <AddForm AddTask={AddTask}/>

          {/* Tasks Status Filters */}
          <Filter setFilterStatus={setFilterStatus}/>

          {/* Tasks Display Container */}
          <ItemList 
          tasks={filterTasks} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
          updateTask={updateTask}
          />
          {/* End of tasks display */}

        </div>
      </div>
    </div>
  );
}
export default App;
