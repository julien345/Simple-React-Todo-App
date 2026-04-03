import {useState} from 'react'

function AddForm({AddTask}){
// destructuring 
const [task,setTask]=useState('');
const handleSubmit=()=>{
  if(!task){
    alert('please enter a task')
    return
  }
  AddTask(task);
  setTask('');
}
    return(
        <div className="flex mt-5 gap-2 mb-4">
            <input
              type="text"
              placeholder="Add a task"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={task}
              onChange={(e)=>setTask(e.target.value)}
            />
            <button 
            className="px-7 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            onClick={handleSubmit}
            >
              Add
            </button>
          </div>
    )
}
export default AddForm;