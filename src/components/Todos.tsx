import React from 'react'
import type { TodoId, ListTodos, TodoCompleted } from '../utils/types'
import Todo from './Todo'

interface Props {
  todos: ListTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleComplete: ({ id, completed }: TodoCompleted) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleComplete }) => {
  return (
    <ul className='todo-list'>
        {todos.map((todo) =>
            <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                <Todo
                  key={todo.id}
                  id={todo.id}
                  todo={todo.todo}
                  completed={todo.completed}
                  onRemoveTodo={onRemoveTodo}
                  onToggleComplete={onToggleComplete}/>
            </li>
        )}
    </ul>
  )
}

export default Todos
