import { cn } from '@bem-react/classname'
import React from 'react'

import './TodosHeader.scss'
import { Todo, mockTodo } from 'models/Todo'

const bem = cn('TodosHeader')

export const TodosHeader: React.FC<{ addTodo: (todo: Todo) => void }> = ({ addTodo }) => {
  const addTodoHandler = () => {
    addTodo(mockTodo)
  }
  return (
    <div className={bem()}>
      <div className={bem('Sort')}>Lastest</div>
      <div className={bem('Add')} onClick={addTodoHandler}>
        Add
      </div>
    </div>
  )
}
