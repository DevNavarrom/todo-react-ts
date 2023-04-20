import { combineReducers } from '@reduxjs/toolkit'
import todosReducer from './features/Todos/todosSlice'

export const rootReducer = combineReducers({
  todos: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>
