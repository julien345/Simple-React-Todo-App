import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  // fonction to add a new todo
  
  const addTodo=(text)=>{
    const item={
      id: Date.now(),
      tache:text,
      completed:false
    }
    setTodos(
      (prev)=>{
        return [...prev,item]
      }
    )
  }
  // function to edit a todo
    const editTodo = (id, newText) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, tache: newText } : todo
        )
      );
    };
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
  const filteredTodos = todos.filter(todo => {
    if(filter === "active") return !todo.completed
    if(filter === "completed") return todo.completed
    return true
  })

    return (
    <TaskContext.Provider value=
    {{todos: filteredTodos, 
        addTodo, 
        deleteTodo, 
        toggleTodo, 
        editTodo, 
        setFilter
        }}>
      {children}
    </TaskContext.Provider>
  );
}