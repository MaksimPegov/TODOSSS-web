import { cn } from '@bem-react/classname'
import { useState } from 'react'

import { TodosHeader } from 'todos/modules/todos-header/TodosHeader'
import { TodoRow } from 'todos/modules/todo-row/TodoRow'
import { Todo } from 'models/Todo'
import './Todos.scss'

const bem = cn('Todos')

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: Todo) => {
    setTodos((todos) => [...todos, todo])
  }

  return (
    <div className={bem()}>
      <div className={bem('Header')}>
        <TodosHeader addTodo={addTodo} />
      </div>
      <div className={bem('List')}>
        {todos.length === 0 ? 'No todos' : todos.map((todo) => <TodoRow todo={todo} />)}
      </div>
    </div>
  )
}
