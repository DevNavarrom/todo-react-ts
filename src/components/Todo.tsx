import React from 'react'
import { type ITodos } from '../utils/interfaces'
import type { TodoCompleted, TodoId } from '../utils/types'

interface Props extends ITodos {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleComplete: ({ id, completed }: TodoCompleted) => void
}

const Todo: React.FC<Props> = ({ id, todo, completed, onRemoveTodo, onToggleComplete }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleComplete({ id, completed: event.target.checked })
  }

  return (
    <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={completed}
          onChange={handleChangeCheckbox}/>

        <label>{todo}</label>
        <button
          className='destroy'
          onClick={() => { onRemoveTodo({ id }) }}/>
    </div>
  )
}

export default Todo
