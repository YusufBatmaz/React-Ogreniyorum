import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import '../App.css'
import { useState } from 'react'

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

    const { id, content } = todo;
    const [editable, setEditable] = useState(false)
    const [newTodo, setNewTodo] = useState(content)

    const removeTodo = () => {
        onRemoveTodo(id)
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request)
        setEditable(false)
    }

    return (
        <div className='todo'>
            <div>
                {
                    editable ? <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> : 
                    <p>{content}</p>
                }
            </div>

            <div>
                <IoIosRemoveCircle
                    style={{ cursor: 'pointer', marginRight: '10px', color: 'red', fontSize: '22px' }}
                    onClick={removeTodo} />


                {
                    editable ? <FaCheck style={{ cursor: 'pointer', color: 'green', fontSize: '22px' }} onClick={() =>
                        updateTodo()} /> :
                        <FaEdit style={{ cursor: 'pointer', color: 'blue', fontSize: '22px' }} onClick={() =>
                            setEditable(true)}  />
                }

            </div>


        </div>
    )
}

export default Todo