import { type ListTodos } from './types'

export interface ITodos {
  id: string
  todo: string
  completed: boolean
}

export interface TodosState {
  todos: ListTodos
  error: string
}
