import './App.scss'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import { LeftMan } from './assets/BackroundMen/LeftMan'
import { RightMan } from './assets/BackroundMen/RightMan'
import { WelcomePage } from 'welcome/WelcomePage'
import { Login } from 'login/Login'

export const App = () => {
  const location = useLocation()

  return (
    <div className="App">
      <LeftMan />
      <Routes location={location} key={location.pathname}>
        <Route path="/welcome-page" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to="/welcome-page" />} />
      </Routes>
      <RightMan />
    </div>
  )
}
