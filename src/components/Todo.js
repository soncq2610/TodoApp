import React from 'react'

import { RiCloseCircleLine } from 'react-icons/ri'

function Todo({ todos, completeTodo, removeTodo, editTodo }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        style={{ width: '90%' }}
      >
        {todo.text}
      </div>

      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="detele-icon"
        />
      </div>
    </div>
  ))
}

export default Todo
