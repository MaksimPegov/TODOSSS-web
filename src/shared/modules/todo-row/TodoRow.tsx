import { cn } from '@bem-react/classname'
import { Todo } from 'models/Todo'
import React from 'react'

const bem = cn('TodoRow')

export const TodoRow: React.FC<{ todo: Todo }> = ({ todo }) => {
  return <div className={bem()}>{todo.text}</div>
}
