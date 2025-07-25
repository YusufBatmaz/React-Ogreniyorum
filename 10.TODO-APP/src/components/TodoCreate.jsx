import React, { useState }  from 'react'
import '../App.css'
import TodoList from './TodoList'


function TodoCreate({onCreateTodo}) {


    const [newTodo, setNewTodo] = useState('')

    const createTodo = (todo) => { 

        if(!newTodo) return

        const request = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo,
        }

        onCreateTodo(request)

        setNewTodo('')
    }


  return (
    <div className='todo-create'>
        <div className='todo-create-input-container'>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} 
            type="text" placeholder='Add a new todo' className='todo-create-input' />

            <button onClick={createTodo} className='todo-create-button'>Add</button>
        </div>
        <div className='todo-list-container'>
            <TodoList />
        </div>
    </div>
  )
}

export default TodoCreate