import TodoItem from "./TodoItem";
function TodoList({todos,deleteTodo,toggleTodo,editTask}){
    return (
        todos.map((item) => (
            <ul>
            <TodoItem 
            key={item.id} 
            item={item} 
            deleteTodo={deleteTodo} 
            toggleTodo={toggleTodo}
            editTask={editTask}
            />
            </ul>
        ))
    );
}
export default TodoList;