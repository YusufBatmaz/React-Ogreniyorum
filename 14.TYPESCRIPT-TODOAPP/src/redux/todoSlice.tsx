import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TodoİnitialState, TodoType } from "../types/Types";

const initialState:TodoİnitialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo : (state:TodoİnitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload]
        },
        removeTodo : (state:TodoİnitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
        },
        updateTodo : (state:TodoİnitialState, action: PayloadAction<{id: number, content: string}>) => {
            state.todos = state.todos.map((todo: TodoType) => 
                todo.id === action.payload.id ? {...todo, content: action.payload.content} : todo
            )
        }
    }
})

export const { createTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;