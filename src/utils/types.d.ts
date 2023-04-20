import { type ITodos } from './interfaces'

export type ListTodos = ITodos[]

export type TodoId = Pick<ITodos, 'id'>

export type TodoCompleted = Pick<ITodos, 'id' | 'completed'>
