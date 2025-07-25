import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])

  const createTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
        if(todo.id !== newTodo.id){
            return todo
        }
        return newTodo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='App'>

      <div style={{ width: '100%' }}>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App
