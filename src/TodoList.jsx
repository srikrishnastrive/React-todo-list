import { useCallback } from "react";
import TodoListItem from "./TodoListItem"

function TodoList({listOfTodos,onDeleteTodo}){

    function deleteTodo(value){
        console.log('delete todo with value:',value);
        onDeleteTodo?.(value);
    }
    const memoDeleteTodoCallback = useCallback(deleteTodo,[onDeleteTodo]);
    return (
        <ul>
            {listOfTodos?.map((todo)=>{
                return <TodoListItem key={todo.value} todo={todo} onDelete = {memoDeleteTodoCallback}/>
            })}
        </ul>
    )
}

export default TodoList;
