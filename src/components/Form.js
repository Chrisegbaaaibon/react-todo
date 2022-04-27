import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

 const Form =({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
   const updateTodo = (title, id, completed) =>{
      const newTodo = todos.map((todo)=>
         todo.id === id ? { title, id, completed} : todo
      );
      setTodos(newTodo);
      setEditTodo(""); 
   };
   useEffect(()=>{
      if(editTodo){
         setInput(editTodo.title);
      }else{
         setInput("")
      }
   }, [setInput, editTodo])

   const onInputChange = (event)=>{
            setInput(event.target.value);
   }
   
const onFormSubmit=(event)=>{
   event.preventDefault();
   if(!editTodo){
   setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
   setInput("")
}else{
   updateTodo(input, editTodo.id, editTodo.completed)
}
}
const headStyle = {
   margin: '30px 0',
   fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sansSerif',
   textAlign: 'center',
   color: '#051725',
   fontSize: '18px'
}



  return (
   <div>
      <div className='header' style={headStyle}>
         <h1>Todos</h1>
      </div>
      <form onSubmit={onFormSubmit}>
         <input
            type="text"  
            placeholder="Enter your Todo" 
            className="todo-input"
            value={input}
            required
            onChange={onInputChange}

         />
         <button className='button-add' type='submit '>
               {editTodo ? 'Save' : 'Add'}
            </button>
      </form>
    </div>
  )
}

export default Form;