import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import AddTodo from "../Components/AddTodo";
import TodoList from "../Components/TodoList";
import Filter from "../Components/Filter";

function Home() {
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo, setFilter } = useContext(TaskContext);
  return (
    <div>
      <h1>Todo App 🚀</h1>

      <AddTodo addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default Home;