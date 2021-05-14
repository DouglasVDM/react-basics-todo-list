import React, {useState, useRef} from 'react';  //import hooks with {}...to JavaScript Wolrd.
import TodoList from './TodoList'

function App() {
  const [todos, setTodo] = useState([])
  //  Call the function pass in Default state is empty array to store all the todos.
  //  todos is all the todos inside of the Todo State.
  // setTodo is the Function we call to Update the Todos.

  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === "") return  // Don't want to add empty todos.
    console.log(name)
    todoNameRef.current.value = null  // Clear input after adding todo.
  }

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>o left to do.</div>
    </>
  );
}

export default App;
