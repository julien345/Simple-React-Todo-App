import TodoItem from "./TodoItem";
function TodoList({todos,deleteTodo,toggleTodo,editTodo}){
    return (
        todos.map((item) => (
            <ul>
            <TodoItem 
            key={item.id} 
            item={item} 
            deleteTodo={deleteTodo} 
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            />
            </ul>
        ))
    );
}
export default TodoList;