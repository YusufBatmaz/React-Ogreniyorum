import React from 'react'
import Todo from './Todo'

function TodoList({todos, onRemoveTodo, onUpdateTodo}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
    alignItems: 'center', width: '100%', padding: '10px', marginTop: '20px', }}>

        {todos && todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
        ))}

    </div>
  )
}

export default TodoList