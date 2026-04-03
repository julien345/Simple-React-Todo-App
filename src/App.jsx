import React from 'react';
import {useState} from 'react'
import AddForm from './components/AddForm';
import Filter from './components/Filter';
import ItemList from './components/ItemList';

function App() {
// create empty array of tasks
const [tasks,setTaks]=useState([]);

// function to add a task to the array of tasks
function AddTask(task){
const newTask={
  id:Date.now(),
  task:task,
  completed:false
}
setTaks(prev=>[...prev,newTask])

}
//function to toggle the completed status of a task
const toggleTask = (id)=>{
  setTaks(prev =>
    prev.map(task=>
      task.id === id
        ? {...task, completed: !task.completed}
        : task
    )
  )
}







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
          <Filter />

          {/* Tasks Display Container */}
          <ItemList tasks={tasks} toggleTask={toggleTask}/>
          {/* End of tasks display */}

        </div>
      </div>
    </div>
  );
}
export default App;
