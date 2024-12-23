import { memo } from "react";

function TodoListItem({todo,onDelete}){
    return (
        <>
        <div>
        <li>{todo.value}</li>
        <button onClick={()=> onDelete(todo.value)}>X</button>
        </div>
           
        </>
        
    )
}
export default memo(TodoListItem);
