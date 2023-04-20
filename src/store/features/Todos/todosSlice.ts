import { createSlice } from '@reduxjs/toolkit'
import type { ITodos, TodosState } from '../../../utils/interfaces'

const initialState: TodosState = {
  todos: new Array<ITodos>(),
  error: ''
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodosSuccess (state, action): void {
      state.todos = action.payload.todos
    },
    fetchTodosError (state, action): void {
      state.error = action.payload
    },
    removeTodoSuccess (state, action): void {
      const { id } = action.payload
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    updateTodoSuccess (state, action): void {
      const { id, completed } = action.payload
      const _newTodos = state.todos.map(todo => todo.id === id ? { ...todo, completed } : todo)
      state.todos = _newTodos
    }
  }
})

export const { fetchTodosSuccess, fetchTodosError, removeTodoSuccess, updateTodoSuccess } = todosSlice.actions
export default todosSlice.reducer
