import { useEffect } from 'react'
import Todos from '../components/Todos'
import type { TodoCompleted, TodoId } from '../utils/types'
import { useAppSelector, useAppDispatch } from '../store/store'
import { fetchTodos, removeTodo, updateTodo } from '../store/features/Todos/thunks'

export const App = (): JSX.Element => {
  const todos = useAppSelector(state => state.todos.todos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const handleRemove = (id: TodoId): void => {
    dispatch(removeTodo(id))
  }

  const handleCompleted = (complete: TodoCompleted): void => {
    dispatch(updateTodo(complete))
  }

  return (
    <>
      <div className='todoapp'>
        <h1>Backlog</h1>
        <Todos
          todos={todos.filter(todo => !todo.completed)}
          onRemoveTodo={handleRemove}
          onToggleComplete={handleCompleted} />
      </div>
      <div className='todoapp'>
        <h1>Done</h1>
        <Todos
          todos={todos.filter(todo => todo.completed)}
          onRemoveTodo={handleRemove}
          onToggleComplete={handleCompleted} />
      </div>
    </>
  )
}
