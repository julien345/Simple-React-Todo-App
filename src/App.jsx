import { useState,useEffect} from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import Filter from "./Components/Filter";

function App(){
// state for todos

const [todos,setTodos] = useState(()=>{
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
})

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

// fonction to add a new todo

const addTodo=(item)=>{
  setTodos(
    (prev)=>{
      return [...prev,item]
    }
  )
}
// function to delete a todo

const deleteTodo=(id)=>{
    setTodos((prev)=>{
     return  prev.filter((todo)=> todo.id!==id)
    })
  }

  //function to toggle completed status of a todo
  const toggleTodo = (id)=>{
  setTodos(prev =>
    prev.map(todo =>
      todo.id === id
        ? {...todo, completed: !todo.completed}
        : todo
    )
  )
}
// function to filter todos based on status
const [filter,setFilter] = useState("all")
const filteredTodos = todos.filter(todo => {
  if(filter === "active") return !todo.completed
  if(filter === "completed") return todo.completed
  return true
})

// render
return(
  <div>

    <h1>Todo List</h1>
    {/* component for adding a new todo */}
    <AddTodo addTodo={addTodo}/>

     <Filter filter={filter} setFilter={setFilter} />
    {/* component for displaying the list of todos */}
    <TodoList 
    todos={filteredTodos} 
    deleteTodo={deleteTodo}
    toggleTodo={toggleTodo}
    />
 
  </div>
)
}

export default App