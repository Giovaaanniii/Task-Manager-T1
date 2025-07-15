import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    todos: [],
  },
  reducers: {
   addTodo(state){
    state.todos.push()
   }
  },
})

