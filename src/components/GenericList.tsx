import React from 'react'

interface Props<T> {
  data: T[]
  renderItem: (item: T) => JSX.Element
}

const GenericList = <T,>({ data, renderItem }: Props<T>): JSX.Element => {
  return (
    <ul className='todo-list'>
      {data.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

export default GenericList
