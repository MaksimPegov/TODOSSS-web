import { cn } from '@bem-react/classname'
import React from 'react'

import './Login.scss'

const bem = cn('Login')

export const Login = () => {
  return <div className={bem()}>Login</div>
}
