import { cn } from '@bem-react/classname'

import { Todos } from 'todos/Todos'
import { useNavigate } from 'react-router-dom'
import './WelcomePage.scss'

const bem = cn('WelcomePage')

export const WelcomePage = () => {
  const navigate = useNavigate()

  const loginHandler = () => {
    navigate('/login')
  }

  return (
    <div className={bem()}>
      <Todos />
      <div className={bem('Login')} onClick={loginHandler}>
        Login
      </div>
    </div>
  )
}
