import { apiInstance } from '../../../api/Api'
import { type ITodos } from '../../../utils/interfaces'
import type { TodoCompleted, TodoId } from '../../../utils/types'
import { type AppDispatch } from '../../store'
import { fetchTodosSuccess, fetchTodosError, removeTodoSuccess, updateTodoSuccess } from './todosSlice'

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    const api = apiInstance()
    const response = await api.get('todos/user/9')
    const tasks: ITodos[] = await response.data
    dispatch(fetchTodosSuccess(tasks))
  } catch (error) {
    dispatch(fetchTodosError(error))
  }
}

export const removeTodo = (todo: TodoId) => (dispatch: AppDispatch) => {
  try {
    dispatch(removeTodoSuccess(todo))
  } catch (error) {
    dispatch(fetchTodosError(error))
  }
}

export const updateTodo = (todo: TodoCompleted) => (dispatch: AppDispatch) => {
  try {
    dispatch(updateTodoSuccess(todo))
  } catch (error) {
    dispatch(fetchTodosError(error))
  }
}
