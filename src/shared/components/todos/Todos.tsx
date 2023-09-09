import { cn } from '@bem-react/classname'
import { Todo } from 'models/Todo'
import { useState } from 'react'
import { TodoRow } from 'shared/modules/todo-row/TodoRow'

const bem = cn('Todos')

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div className={bem()}>
      {todos.length === 0 ? 'No todos' : todos.map((todo) => <TodoRow todo={todo} />)}
    </div>
  )
}
