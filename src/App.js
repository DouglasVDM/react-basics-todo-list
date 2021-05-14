import React from 'react';
import TodoList from './TodoList'

function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>o left to do.</div>
    </>
  );
}

export default App;
