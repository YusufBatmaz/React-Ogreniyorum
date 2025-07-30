import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
  todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id))
  }

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleUpdateTodo = () => {
    dispatch(updateTodo({id, content: newTodo}))
  }

  return (
    <div className="todo">
      <div>{editable ? <input type="text" className="todo-input"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : content}</div>
      <div>
        <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className="icons" />
                 {editable ? (
           <FaCheck onClick={() => {
             setEditable(false);
             handleUpdateTodo();
           }} className="icons" />
         ) : (
          <CiEdit onClick={() => setEditable(true)} className="icons" />
        )}
      </div>
    </div>
  )
}

export default Todo