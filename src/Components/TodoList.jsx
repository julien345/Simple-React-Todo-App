import TodoItem from "./TodoItem";
function TodoList({todos,deleteTodo,toggleTodo}){
    return (
        todos.map((item) => (
            <ul>
            <TodoItem 
            key={item.id} 
            item={item} 
            deleteTodo={deleteTodo} 
            toggleTodo={toggleTodo}
            />
            </ul>
        ))
    );
}
export default TodoList;