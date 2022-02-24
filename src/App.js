import { useState, useEffect  } from 'react';
import  './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
const App = () => {

  const initialState =   JSON.parse(localStorage.getItem("todos")) || [];
const [ input, setInput ] = useState(""),
          [todos, setTodos ] = useState(initialState),
          [editTodo, setEditTodo] = useState(null);

          useEffect(()=>{
            localStorage.setItem("todos", JSON.stringify(todos))
          }, [todos])

  return (
  <div className="container ">
    <div className='app-wrapper'>
      
      <div>
         <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
         />
      </div>
      <div>
        <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
         />
      </div>
    </div>
  </div>
  );
}

export default App;
