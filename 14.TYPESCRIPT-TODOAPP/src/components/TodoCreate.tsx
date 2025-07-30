import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { useState } from "react";

function TodoCreate() {

  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim() == "") {
        alert("Yapılacak işi giriniz.")
    }

    const payload = {
      id : Math.floor(Math.random() * 999999),
      content : newTodo
    }

    dispatch(createTodo(payload))
    setNewTodo("")
  }


  return (
    <div className='todo-create'>
      <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
        className='todo-create-input' type="text" placeholder='Yapılacak işi giriniz.' />
      <button onClick={handleCreateTodo} className='todo-create-button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate