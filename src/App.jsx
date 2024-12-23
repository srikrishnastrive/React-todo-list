import { useCallback, useEffect, useState } from 'react'

import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {
 
  const [todos,setTodos] = useState([]);

  function onTodoFormSubmit (value){
    if (value){
      setTodos([...todos,{value}]);
    }
  }

  useEffect(()=>{
    console.log('Todos:',todos);

  },[todos]);

  
  function deleteTodoById(value){
    console.log('delete called by ',value);
    console.log(todos);
    //setTodos(todos.filter(todo => todo.value !== value));
    const newTodos = todos.filter(todo => todo.value !== value);
    
    setTodos(newTodos);
  }

  const deleteTodoMemo = useCallback(deleteTodoById,[todos]);

  return (
    <>
      <h1>Todo list</h1>
      <TodoInput onSubmit={onTodoFormSubmit}/>
      <TodoList listOfTodos={todos} onDeleteTodo={deleteTodoMemo}/>
    </>
  )
}

export default App
