import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo} />
    })
  )
}
/*
Keyword "key"
React only rerenders or change the components that actually changed inside of our array
Instead of rerendering all of them, every single time.
It's there for iffiency purposes
*/