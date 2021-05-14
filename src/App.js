import React, {useState} from 'react';  //import hooks with {}...to JavaScript Wolrd.
import TodoList from './TodoList'

function App() {
  const [todos, setTodo] = useState([{ id: 1, name: "Todo 1", complete: false }])
  //  Call the function pass in Default state is empty array to store all the todos.
  //  todos is all the todos inside of the Todo State
  // setTodo is the Function we call to Update the Todos.
  return (
    <>
      <TodoList todos={todos}/>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>o left to do.</div>
    </>
  );
}

export default App;
