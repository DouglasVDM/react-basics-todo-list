import React, {useState, useRef, useEffect } from 'react';  //import hooks with {}...to JavaScript Wolrd.
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  //  Call the function pass in Default state is empty array to store all the todos.
  //  todos is all the todos inside of the Todo State.
  // setTodo is the Function we call to Update the Todos.
  const todoNameRef = useRef()


  //  Getting todos.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])


  //  Storing todos.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  //  takes in another function as a parameter that must do things
  //  evertime something changes, I want to call the very first function
  //  evertime the todos changes I want to save my todos


  //  Toggle todos from complete to incomplete and vice-versa.
  function toggleTodo(id) {
    const newTodos = [...todos] //  Copy of todosList, so the todoList does not get modified.
    const todo = newTodos.find(todo => todo.id == id);
    todo.complete = !todo.complete
    setTodos(newTodos)
}


  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === "") return  // Don't want to add empty todos.
    setTodos(previousTodos => {
      return [...previousTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null  // Clear input after adding todo.
  }


  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }


  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{ todos.filter(todo=>!todo.complete).length} left to do.</div>
    </>
  );
}

export default App;
